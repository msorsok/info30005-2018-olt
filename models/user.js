var mongoose = require("mongoose");
var capsuleSchema = require("./capsule.js");
var bcrypt   = require('bcrypt');

var userSchema =  mongoose.Schema(
    {
        "firstName" : String,
        "lastName" : String,
        "dateOfBirthF" : Date,
        "emailF" : String,
        "passwordF": String,
        "capsules": [capsuleSchema],
        "profilePic" : {data: Buffer, contentType: String},
        "nominee1email" : String,
        "nominee2email" : String
    }
);
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
mongoose.model('user', userSchema);
