const dbHandler = require('../Model/index.js').dbHandler;

const requestHandler = {
  openProductionList: (req, res) => {
    dbHandler.openProductionList(req, (err, data) => {
      if(err) {
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    })
  },
  partsList: (req, res) => {
    dbHandler.partsList(req, (err, data) => {
      if(err) {
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    })
  }
}

module.exports.requestHandler = requestHandler;