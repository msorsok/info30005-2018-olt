var mongoose = require("mongoose");

var imgSchema =  mongoose.Schema(

    {
        data: Buffer,
        contentType: String
    }
);

mongoose.model('img', imgSchema);

module.exports = imgSchema;