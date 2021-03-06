var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name : { type : String, required : true },
  email : { type : String, required : true },
  message : {type : String }
});

var userModel = mongoose.model('user', userSchema );
module.exports = userModel;
