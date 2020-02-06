const { pool } = require('../services/database');

module.exports.getProjectList = (callback) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      callback(false);
      return;
    }
    const query = 'select * from tbl_project';
    connection.query(query, [], (queryErr, result) => {
      connection.release();

      if (err) {
        console.log(queryErr);
        callback(false);
      }

      callback(result);
    });
  });
};
