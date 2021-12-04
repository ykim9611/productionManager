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
    db.query('SELECT parts.id, parts.product_id, partName, parts.etd, received FROM productionRun JOIN parts ON productionRun.id = ? AND parts.product_id = ?', reqParams, (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  },
  addNewProductionRun: (req, callback) => {
    const longestLeadTime = Number(req.body.parts.sort((a,b)=> b.leadTime - a.leadTime)[0].leadTime);
    const date = new Date();
    const etdDate = new Date(new Date().getTime()+((longestLeadTime + 7)*24*60*60*1000));
    const formattedDate =  date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    const formattedEtdDate = etdDate.getFullYear() + "-" + (etdDate.getMonth()+1) + "-" + etdDate.getDate();
    const productionQuery = `INSERT INTO productionRun (productName, annualSales, prodStartDate, openBool, etd) VALUES ('${req.body.productName}', ${req.body.annualSales}, '${formattedDate}', 1, '${formattedEtdDate}')`;
    db.query(productionQuery, (err, data) => {
      if(err) {
        callback(err, null);
      } else {
        var partsQuery = `INSERT INTO parts (product_id, partName, etd, received) VALUES `;
        for(var i = 0; i < req.body.parts.length; i++) {
          const currentPart = req.body.parts[i];
          const partEtdDate = new Date(new Date().getTime()+(currentPart.leadTime*24*60*60*1000));
          const formattedPartEtdDate = partEtdDate.getFullYear() + "-" + (partEtdDate.getMonth()+1) + "-" + partEtdDate.getDate();
          partsQuery += `('${data.insertId}', '${currentPart.partsName}', '${formattedPartEtdDate}', '0')`;
          if(i === req.body.parts.length - 1) {
            partsQuery += ';';
          } else {
            partsQuery += ', ';
          }
        }
        db.query(partsQuery, (err)=> {
          if(err) {
            callback(err);
          } else {
            callback(null);
          }
        })
      }
    })
  },
  editLeadTime: (req, callback) => {
    const reqPartParams = [req.body.newPartETD, req.body.partId];
    function process(date){
      var parts = date.split("-");
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    var totalETD = process(req.body.totalETD);
    var newPartETD = process(req.body.newPartETD);
    db.query(`UPDATE parts SET etd = ? WHERE id = ?`, reqPartParams, (err)=> {
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  },
  updateTotalLeadTime: (req, callback) => {
    function process(date){
      var parts = date.split("-");
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    const newProductionETD = new Date(process(req.body.newPartETD).getTime() + (7*24*60*60*1000));
    const formattedNewProductionETD = newProductionETD.getFullYear() + "-" + (newProductionETD.getMonth()+1) + "-" + newProductionETD.getDate();
    const reqProductionParams = [formattedNewProductionETD, req.body.product_id];
    db.query('UPDATE productionRun SET etd = ? WHERE id = ?', reqProductionParams, (err)=> {
      if(err) {
        callback(err);
      } else {
        callback(null);
      }
    })
  }
};

module.exports.dbHandler = dbHandler;