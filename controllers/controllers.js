var database = require('../models/db');

const comingSoonRoute = function(req, res) {
    res.render('comingsoon');
};


module.exports = {
    comingSoonRoute: comingSoonRoute
};