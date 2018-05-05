var mongoose = require("mongoose");

mongoose.connect("mongodb://adminlasttime:iloveweb123@ds215370.mlab.com:15370/onelasttime");

var PassingAwayEvents = mongoose.model('PassingAwayEvents', new Schema({ name: String, datePassing: Date}));

module.exports = PassingAwayEvents;