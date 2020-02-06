const { pool } = require('../services/database');

module.exports.signin = (id, password, callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(false);
      return;
    }
    const query = 'SELECT COUNT(*) AS count FROM tbl_user WHERE uid = ? AND password=?;';
    connection.query(query, [id, password], (queryErr, result) => {
      connection.release();

      if (err) {
        console.log(queryErr);
        callback(false);
      }
      console.log(result[0].count);
      if (result[0].count === 0) {
        console.log('0');
        callback(false);
      } else {
        callback(result);
      }
    });
  });
};
