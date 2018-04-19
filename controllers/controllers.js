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

const accountRoute = function(req, res) {
    res.render('account');
};

const unlockRoute = function(req, res) {
    res.render("unlock");
};
const createRoute = function(req, res) {
    res.render('newmessage');
};
const userWelcomeRoute = function (req,res) {
    res.render('user_welcome')
};
const userInboxRoute = function (req,res) {
    res.render('user_inbox')
};

module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    blankRoute: blankRoute,
    unlockRoute: unlockRoute,
    userWelcomeRoute: userWelcomeRoute,
    userInboxRoute:userInboxRoute,
    blankRoute: blankRoute,
    accountRoute: accountRoute,
    createRoute: createRoute,
    blankRoute: blankRoute
};