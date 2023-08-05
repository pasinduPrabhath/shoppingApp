const pool = require('../config/database');
// const { get } = require('./user.router');
module.exports = {
userRegister: (data, callBack) => {
    pool.query(
        `insert into userTable(userName,email,password) values(?,?,?)`,
        [
            data.userName,
            data.email,
            data.password,
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
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
        query += ` WHERE id = ${id}`;
    }
    pool.query(query, (error, results, fields) => {
        if (error) {
            return callBack(error);
        }
        return callBack(null, results);
    });
}
};