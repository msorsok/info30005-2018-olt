var mongoose = require("mongoose");

var passingSchema =  mongoose.Schema(
    {
        "name": String,
        "datePassing": Date
    }
);

mongoose.model('Passing', passingSchema);
