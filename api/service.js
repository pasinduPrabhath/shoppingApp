const pool = require("../config/database");
const { sendEmail } = require("./email");
const jwt = require("jsonwebtoken");
// const { get } = require('./user.router');

function generateOTP() {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
module.exports = {
userRegister: (data, callBack) => {
    const otp = generateOTP();
    pool.query(
      `insert into userTable(userName,email,password,otp,account_status) values(?,?,?,?,?)`,
      [data.userName, data.email, data.password, otp, "pending"],
      async (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        try {
          await sendEmail(data.email, data.userName, "Welcome to the Lapzoid! \nYou have to verify your account by entering this OTP: " + otp,"template_ecvqu3m");
          return callBack(null, results);
        } catch (error) {
          console.error(error);
          return callBack(error);
        }
      }
    );
  },
getUserByEmail: (email, callBack) => {
    pool.query(
      `select 
        userId,userName,email,account_status,password
        from userTable
        where
        email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
getProducts: (id, callBack) => {
    let query = `SELECT * FROM product_table`;
    if (id) {
      query += ` WHERE product_id = ${id}`;
    }
    pool.query(query, (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
emailVerification: (email, otp, callBack) => {
    pool.query(
        `select
        *
        from userTable
        where
        email = ? and otp = ?`,
        [email, otp],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            if (results.length > 0) {
                pool.query(
                  `update userTable set account_status = 'verified' where email = ?`,
                  [email],
                  (error, results, fields) => {
                    if (error) {
                      return callBack(error);
                    }
                    return callBack(null, results);
                  }
                );
              } else{
            return callBack(null, results);
            }
        }
    );
},

searchByKeyword: (keyword, callback) => {
    pool.query(
      `SELECT title,product_id FROM product_table WHERE title LIKE '%${keyword}%'`,
      [],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

addToCart: (data, callBack) => {
    pool.query(
      `select * from product_table where product_id = ?`,
      [data.product_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if (results.length == 0) {
            return callBack(null, { error: "Invalid product ID" });
        }
        pool.query(
          `insert into cart_table(productId,userId) values(?,?)`,
          [data.product_id, data.user_id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      }
    );
  },

removeFromCart: (data, callBack) => {
    pool.query(
        `select * from cart_table where productId = ? AND userId = ?`,
        [data.productId, data.userId],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            if (results.length == 0) {
                return callBack(null, { error: "Invalid product ID" });
            }
            pool.query(
                `delete from cart_table where productId = ? AND userId = ?`,
                [data.productId, data.userId],
                (error, results, fields) => {
                    if (error) {
                        return callBack(error);
                    }
                    return callBack(null, results);
                }
            );
        }
    );
},

  getProductsInCart: (userId, callBack) => {
    pool.query(
      `select 
        p.product_id,
        p.title,
        p.price,
        p.image,
        p.category,
        c.cartId
        from cart_table c
        inner join product_table p on c.productId = p.product_id
        where c.userId = ?`,
      [userId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  placeOrder: (data, callBack) => {
    // Get the user's cart items with their prices
    pool.query(
      'SELECT c.productId, p.price FROM cart_table c JOIN product_table p ON c.productId = p.product_id WHERE c.userId = ?',
      [data.userId],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
  
        // Check if the cart is empty
        if (results.length === 0) {
          return callBack(null, { error: 'Cart is empty' });
        }
  
        // Calculate the total amount of the order
        const totalAmount = results.reduce(
          (total, item) => total + item.price,
          0
        );
        const orderSummary = results.map(item => `${item.title} x 1: $${item.price.toFixed(2)}`).join('\n');
  
  
        // Insert a new row into the order table
        pool.query(
          'INSERT INTO order_table (userId, totalAmount,orderDate,addressLine1,addressLine2,phone,district,zipcode) VALUES (?, ?,?,?,?,?,?,?)',
          [data.userId, totalAmount,data.orderDate,data.addressLine1,data.addressLine2,data.phone,data.district,data.zipcode],
          (error, result) => {
            if (error) {
              return callBack(error);
            }
  
            // Get the ID of the new order
            const orderId = result.insertId;
  
            // Insert a new row into the order details table for each item in the cart
            const values = results.map((item) => [orderId, item.productId]);
            pool.query(
              'INSERT INTO order_table_details (orderId, productId) VALUES ?',
              [values],
              (error) => {
                if (error) {
                  return callBack(error);
                }
  
                // Delete the cart items 
                pool.query(
                  'DELETE FROM cart_table WHERE userId = ?',
                  [data.userId],
                  (error) => {
                    if (error) {
                      return callBack(error);
                    }
  
                    // const emailService = require('./email.js');
                    // const email = data.email; 
                    // const name = data.name; 
                    const message = `Thank you for your order!\n\nOrder Summary:\n${orderSummary}\n\nTotal Amount: $${totalAmount.toFixed(2)}`;
                    sendEmail(data.email, data.name, message,"template_mtj5ece");
  
                    // Return the order ID
                    return callBack(null, { orderId });
                  }
                );
              }
            );
          }
        );
      }
    );
  }
};
