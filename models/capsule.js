var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var imgSchema = require("./img.js");
var videoSchema = require("./video.js");
var fileSchema = require("./file.js");

var capsuleSchema =  mongoose.Schema(
    {
        "senderFirstName" : String,
        "senderLastName" : String,
        "recipients" : [String],
        "img" : [imgSchema],
        "note" : String,
        "video" : [videoSchema],
        "file" : [fileSchema],
        "released" : Boolean,
        "dateSent": Date
    }
);

mongoose.model('capsule', capsuleSchema);

module.exports = capsuleSchema;
