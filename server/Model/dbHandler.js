const db = require('../../db/index.js').dbConnection;

const dbHandler = {
  openProductionList: (req, callback) => {
    db.query('SELECT * FROM productionRun WHERE openBool = 1', (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  },
  partsList: (req, callback) => {
    const reqParams = [req.params.id, req.params.id];
    db.query('SELECT parts.id, partName, parts.etd, received FROM productionRun JOIN parts ON productionRun.id = ? AND parts.product_id = ?', reqParams, (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
};

module.exports.dbHandler = dbHandler;