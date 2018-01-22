var mongoose = require('mongoose');
var userModel = require('../models/users');

var createUser = function(req,res){
  var usermodel = new userModel({
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  });
  usermodel.save(function(err,doc){
    if(err) res.json(err);
    else   res.json({ "msg" : "successful"});
  });
}

module.exports = {"createUser" : createUser };
