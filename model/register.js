const mongoose = require('mongoose');

const register =mongoose.model('register', new mongoose.Schema({
    username: String,
    password:String,
    date:{type: Date,default:Date.now}
}));

module.exports= register;