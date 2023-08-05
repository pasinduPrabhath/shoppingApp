const { get } = require("./router");
const {
  userRegister,
  getUserByEmail,
  getProducts,
  searchByKeyword,
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
      const result = bcrypt.compareSync(password, results[0].password);
      if (result) {
        results[0].password = undefined;
        return res.json({
          success: 1,
          data: results,
        });
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
  //-------------------------Search-------------------------

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
};
