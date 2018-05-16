var mongoose = require("mongoose");

var passingSchema =  mongoose.Schema(
    {
        "deceased": String,
        "datePassing": Date
    }
);

mongoose.model('passing', passingSchema);



