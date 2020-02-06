const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 's3tdev',
  port: 3306,
  database: 'portfolio_db',
});

module.exports.pool = pool;
