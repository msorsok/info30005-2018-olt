var database = require('../models/db');

const comingSoonRoute = function(req, res) {
    res.render('comingsoon');
};


const loginRoute = function(req, res) {
    res.render('login');
};

const blankRoute = function(req, res) {
    res.render('page_template');
}
const accountRoute = function(req, res) {
    res.render('account');
};

const newMessageRoute = function(req, res) {
    res.render('newmessage');
};


module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    blankRoute: blankRoute,
    accountRoute: accountRoute,
    newMessageRoute: newMessageRoute
};