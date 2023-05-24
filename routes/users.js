var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/4thproject");

var userSchema = mongoose.Schema({
  email :String,
  fullname:String,
  profileimage:String,
  like: {
    type:Number,
    default:0
  }
})

module.exports = mongoose.model("user",userSchema);