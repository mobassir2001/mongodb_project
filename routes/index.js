var express = require('express');
var router = express.Router();
var userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/register', function(req, res) {
 userModel.create({
email:req.body.email,
fullname:req.body.fullname,
profileimage:req.body.profileimage,
}).then(function(val){
  res.send(val)
})
});

router.get('/feed', function(req, res) {
  userModel.find({})
  .then(function(alluser){
    res.render('feed',{alluser})
  })
});

router.get('/like/:id',function(req,res){
  userModel.findOne({_id:req.params.id })
  .then(function(user){
    user.like++;
    user.save()
    .then(function(saveduser){
      res.redirect("back");
    }) 
  })
})

module.exports = router;

