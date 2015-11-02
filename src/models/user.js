var db = require('../config/database').mongoose,
  Schema = db.Schema,
  ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  id          : ObjectId,
  userId      : Number,
  username    : String,
  answers     : Number,
  questions   : Number
});

exports.User = db.model('User', userSchema);