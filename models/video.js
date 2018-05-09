var mongoose = require("mongoose");

var videoSchema =  mongoose.Schema(

    {
        data: Buffer,
        contentType: String
    }
);

mongoose.model('video', videoSchema);

module.exports = videoSchema;