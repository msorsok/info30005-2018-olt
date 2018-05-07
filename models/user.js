var mongoose = require("mongoose");
require("./capsule.js");
var Schema = mongoose.Schema;
var userSchema =  mongoose.Schema(
    {
        "firstName" : String,
        "lastName" : String,
        "dateOfBirthF" : Date,
        "emailF" : String,
        "passwordF": String,
        //"capsules": {type: Schema.ObjectId, ref: 'capsule'},
        "profilePic" : {data: Buffer, contentType: String},
        "nominee1email" : String,
        "nominee2email" : String
    }
);

mongoose.model('User', userSchema);
