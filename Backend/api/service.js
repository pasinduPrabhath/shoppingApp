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
getUser: callBack => {
    pool.query(
        `select userId,userName,email from userTable`,
        [],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
};