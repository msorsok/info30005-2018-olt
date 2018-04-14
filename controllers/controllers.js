var database = require('../models/db');

const comingSoonRoute = function(req, res) {
    res.render('comingsoon');
};


const loginRoute = function(req, res) {
    res.render('login');
};


module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute
};