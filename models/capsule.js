var mongoose = require("mongoose");

var capsuleSchema =  mongoose.Schema(
    {
        "recipients" : {type: Schema.ObjectId, ref: 'user'},
        "img" : { data: Buffer, contentType: String },
        "note" : String,
        "video" : {data: Buffer, contentType: String},
        "file" : {data: Buffer, contentType: String},
        "released" : Boolean
    }
);

mongoose.model('capsule', capsuleSchema);
