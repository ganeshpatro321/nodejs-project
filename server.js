

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));

var router = require('./app/routes');
app.use('/',router);




app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/mydb',{
  useMongoClient: true
});

var db = mongoose.connection;
db.once('open', function(){
  console.log("connection to mongodb succesful..");
}).on('error',function(error) {
  console.log("MongoDB connection error: ", error);
});

app.listen(port, function(){
  console.log('app started');
});
