var mongoose = require("mongoose");

var dependentSchema =  mongoose.Schema(

    {
        "firstName" : String,
        "lastName" : String,
        "username" : String
    }
);

mongoose.model('dependent', dependentSchema);

module.exports = dependentSchema;