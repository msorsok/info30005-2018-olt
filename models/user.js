var mongoose = require("mongoose");
var capsuleSchema = require("./capsule.js");
var bcrypt   = require('bcrypt');
var dependentSchema = require("./dependent.js");

var userSchema =  mongoose.Schema(
    {
        "firstName" : String,
        "lastName" : String,
        "dateOfBirthF" : Date,
        "username" : String,
        "password": String,
        "capsulesReceived": [capsuleSchema],
        "capsulesSent": [capsuleSchema],
        "profilePic" : {data: Buffer, contentType: String},
        "nominee1email" : String,
        "nominee2email" : String,
        "dependents" : [dependentSchema]
    }
);
// methods ======================
var user = module.exports = mongoose.model('user', userSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    user.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
    user.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};