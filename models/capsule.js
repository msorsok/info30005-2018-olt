var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var capsuleSchema =  mongoose.Schema(
    {
        "recipients" : {type: Schema.ObjectId, ref: 'User'},
        "img" : { data: Buffer, contentType: String },
        "note" : String,
        "video" : {data: Buffer, contentType: String},
        "file" : {data: Buffer, contentType: String},
        "released" : Boolean
    }
);

mongoose.model('Capsule', capsuleSchema);
