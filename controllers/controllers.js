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
const userWelcomeRoute = function (req,res) {
    res.render('user_welcome')
}
const userInboxRoute = function (req,res) {
    res.render('user_inbox')
}

module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    blankRoute: blankRoute,
    userWelcomeRoute: userWelcomeRoute,
    userInboxRoute:userInboxRoute
};