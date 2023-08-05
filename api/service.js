const pool = require("../config/database");
const { sendEmail } = require("./email");
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
          await sendEmail(data.email, data.userName, "Welcome to the Lapzoid! \nYou have to verify your account by entering this OTP: " + otp);
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
        *
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
              } 
            return callBack(null, results);
        }
    );
},

  //----------------------------------

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
};
