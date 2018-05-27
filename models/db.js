var mongoose = require("mongoose");
mongoose.connect("mongodb://adminlasttime:iloveweb123@ds215370.mlab.com:15370/onelasttime", function(err) {
    if(!err){
        console.log("connected to mongo");
    } else {
        console.log("failed to connect to mongo");
    }
});

require("./user.js");
require("./capsule.js");
