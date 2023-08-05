const pool = require('../config/database');
const { sendEmail } = require("./email");
// const { get } = require('./user.router');
module.exports = {
    userRegister: (data, callBack) => {
        pool.query(
          `insert into userTable(userName,email,password) values(?,?,?)`,
          [data.userName, data.email, data.password],
          async (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            try {
              await sendEmail(data.email, data.userName, "Welcome to our website!");
              return callBack(null, results);
            } catch (error) {
              console.error(error);
              return callBack(error);
            }
          }
        );
      },
getUserByEmail: (email,callBack) => {
    pool.query(
        `select 
        *
        from userTable
        where
        email = ?`,
        [email],
        (error, results, fields) => {
            if(error){
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
}
};