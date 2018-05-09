var mongoose = require("mongoose");

var fileSchema =  mongoose.Schema(

    {
        data: Buffer,
        contentType: String
    }
);

mongoose.model('file', fileSchema);

module.exports = fileSchema;