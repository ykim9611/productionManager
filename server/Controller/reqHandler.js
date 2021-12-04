const dbHandler = require('../Model/index.js').dbHandler;

const requestHandler = {
  test: (req, res) => {
    dbHandler.test(req, (err, data) => {
      if(err) {
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    })
  }
}

module.exports.requestHandler = requestHandler;