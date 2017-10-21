var express = require('express');
var router = express.Router();
var path = require('path');
module.exports = router;
router.get('/',function(req,res){
  res.render('pages/index');
});

router.get('/about',function(req,res){
  var users = [
    { name: 'Ganesh Patro', email: 'ganesh@gmail.com', photo: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/15492377_922079917926908_4615438403748158028_n.jpg?oh=a035ffa3b7f6fa6069f0029b97da0e67&oe=5A6295A2'},
    { name: 'Ankit Jena', email: 'ankit@gmail.com', photo: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/18920267_1222645264499387_8690455787958771727_n.jpg?oh=0c3e4a9d7ba97421c7d0345f3a46e8cb&oe=5A809F1B'},
    { name: 'Agni Panda', email: 'agni@gmail.com', photo: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/22221560_1680348935370306_4632815448226814761_n.jpg?oh=b1769317fab3f753041f6f517aeda281&oe=5A7F9FC6'},
    { name: 'Aquib Baig', email: 'aquib@gmail.com', photo: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/21433097_1444501698999219_875479167598336227_n.jpg?oh=eb482195324acf542bf7fa78e90a3f83&oe=5A739B18'},
    { name: 'Siddhant Mund', email: 'sid@gmail.com', photo: 'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/21762026_1306925002767320_4281193371998015041_n.jpg?oh=a5d4a6d57150eb55a94ec07e7c3402c0&oe=5A7F6632'}
  ];
  res.render('pages/about', {users : users});
});

router.get('/contact',function(req,res){
  res.render('pages/contact');
});
router.post('/contact',function(req,res){
    res.send("Thanks for contacting us!" + req.body.email + " we will get to you shortly!");
});
