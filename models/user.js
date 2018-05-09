var mongoose = require("mongoose");
var capsuleSchema = require("./capsule.js");
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

mongoose.model('user', userSchema);
