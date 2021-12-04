const db = require('../../db/index.js').dbConnection;

const dbHandler = {
  test: (req, callback) => {
    db.query('SELECT * FROM productionRun JOIN parts ON productionRun.id = parts.product_id', (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
};

module.exports.dbHandler = dbHandler;