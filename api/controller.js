const { get } = require("./router");
const jwt = require("jsonwebtoken");
const {
  userRegister,
  getUserByEmail,
  getProducts,
  searchByKeyword,
  emailVerification,
  addToCart,
  getProductsInCart,
  removeFromCart,
  placeOrder
} = require("./service");
const bcrypt = require("bcryptjs");

module.exports = {
  userRegister: (req, res) => {
    const { userName, email, password } = req.body;
    getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length > 0) {
        return res.json({
          success: 0,
          message: "Email already exists",
        });
      }
      if (results.length == 0) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        const body = {
          userName,
          email,
          password: encryptedPassword,
        };
        userRegister(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
            });
          }
          return res.status(200).json({
            success: 1,
            data: results,
          });
        });
      }
    });
  },
  userLogin: (req, res) => {
    const { email, password } = req.body;
    getUserByEmail(email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (results.length == 0) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      const user = results[0];
      const result = bcrypt.compareSync(password, user.password);
      if (result) {
        if (user.account_status === "verified") {
            const token = jwt.sign({ userId: user.userId }, process.env.JWT_KEY, {
                expiresIn: "1d",
              });
          user.password = undefined;
          return res.json({
            success: 1,
            data: user,
            token: token,
          });
        } else {
          return res.json({
            success: 0,
            data: "Account not verified",
          });
        }
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },

  getProducts: (req, res) => {
    const { id } = req.body;
    getProducts(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (id && results.length === 0) {
        return res.status(404).json({
          success: 0,
          message: "Product not found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
    emailVerification: (req, res) => {
    const { email, otp } = req.body;
    emailVerification(email, otp, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        if (results.length == 0) {
            return res.json({
                success: 0,
                data: "Invalid email or otp",
            });
        }
        return res.json({
            success: 1,
            data: "Email verified successfully",
        });
    });
},

  searchByKeyword: (req, res) => {
    const keyword = req.params.keyword;
    searchByKeyword(keyword, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },


  addToCart: (req, res) => {
    const data = req.body;
  
    jwt.verify(req.token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      // Add the item to the user's cart
      addToCart({ userId: decoded.userId, productId: data.productId }, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        return res.json({
          success: 1,
          data: results,
        });
      });
    });
  },

removeFromCart: (req, res) => {
    const data = req.body;
    removeFromCart(data, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            data: results,
        });
    }
    );
},

getProductsInCart: (req, res) => {
    const { userId } = req.body;
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
      if (err) {
        // If the token is not valid, return an error response
        return res.status(403).json({
          success: 0,
          message: "Invalid token",
        });
      } else {
        // If the token is valid, proceed with fetching products in the cart
        getProductsInCart(userId, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results,
          });
        });
      }
    });
  },

    placeOrder: (req, res) => {
    const data = req.body;
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        if (err) {
            // If the token is not valid, return an error response
            return res.status(403).json({
            success: 0,
            message: "Invalid token",
            });
        } else {
            // If the token is valid, proceed with placing the order
            placeOrder(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results,
            });
            });
        }
        }
    );
    },
  
};
