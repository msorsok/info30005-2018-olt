var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var imgSchema = require("./img.js");
var videoSchema = require("./video.js");

var capsuleSchema =  mongoose.Schema(
    {
        "senderFirstName" : String,
        "senderLastName" : String,
        "recipients" : [String],
        "img" : [String],
        "note" : String,
        "video" : [String],
        "released" : Boolean,
        "dateSent": Date
    }
);

mongoose.model('capsule', capsuleSchema);

module.exports = capsuleSchema;
