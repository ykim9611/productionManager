const db = require('../../db/index.js').dbConnection;

const dbHandler = {
  test: (req, callback) => {
    db.query('SELECT partName, eta, received FROM productionRun JOIN parts ON productionRun.id = 1 AND parts.product_id = 1', (err, data) => {
    // db.query('SELECT * FROM productionRun JOIN parts ON productionRun.id = 1 AND parts.product_id = 1', (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
};

module.exports.dbHandler = dbHandler;