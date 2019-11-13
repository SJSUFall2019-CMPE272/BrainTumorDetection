const mysql = require('mysql');
const myPort = 3306;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    port: myPort,
    password: 'password',
    database: 'braintumor'
});

pool.getConnection((err) => {
    if(err){
      throw 'Error occured: ' + err;
    }
  });
  
module.exports = pool;