var mongoose = require("mongoose");

var userSchema =  mongoose.Schema(
    {
        "firstName" : String,
        "lastName" : String,
        "DOB" : Date,
        "password": String,
        "email" : String,
        "capsules": {type: Schema.ObjectId, ref: 'capsule'},
        "profilePic" : {data: Buffer, contentType: String},
        "nominee1email" : String,
        "nominee2email" : String
    }
);

mongoose.model('user', userSchema);
