const mongoose = require('mongoose');

const register =mongoose.model('register', new mongoose.Schema({
    auth_id:String,
    username: String,
    country:String,
    date:{type: Date,default:Date.now}
}));

module.exports= register;