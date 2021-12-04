var mysql = require('mysql2');

var dbConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'productionManager'
});

dbConnection.connect((err) => {
  if(err) {
    console.log('could not connect to db');
  } else {
    console.log('connected to the db!');
  }
});

module.exports.dbConnection = dbConnection;