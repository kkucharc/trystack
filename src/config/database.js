var db = require('./config').database;
var mongoose = require('mongoose');

//console.log('mongodb://%s/%s', db.url, db.name);
exports.connect = function (dbName) {
  if (dbName === null) {
    dbName = db.url
  }
  console.log('Connecting to ' + db.url + '/' + dbName);
  mongoose.connect('mongodb://' + db.url + '/' + dbName);
  return mongoose;
};

exports.close = function () {
  console.log('Closing connection to ' + db.url + '/' + dbName);
  mongoose.connection.close();
};

exports.db = mongoose;