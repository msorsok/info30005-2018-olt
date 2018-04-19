var database = require('../models/db');

const comingSoonRoute = function(req, res) {
    res.render('comingsoon');
};


const loginRoute = function(req, res) {
    res.render('login');
};

const blankRoute = function(req, res) {
    res.render('page_template');
};

const unlockRoute = function(req, res) {
    res.render("unlock");
};

module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    blankRoute: blankRoute,
    unlockRoute: unlockRoute
};