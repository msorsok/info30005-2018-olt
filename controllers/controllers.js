var mongoose = require("mongoose");
var Passing = mongoose.model("Passing");

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

const account2Route = function(req, res) {
    res.render('account2');
};

const unlockRoute = function(req, res) {
    res.render("unlock");
};
const createRoute = function(req, res) {
    res.render('newmessage');
};
const userWelcomeRoute = function (req,res) {
    res.render('user_welcome');
};
const userInboxRoute = function (req,res) {
    res.render('user_inbox');
};
const viewRoute = function (req,res) {
    res.render('view_capsule', database[req.params.id]);
};
const userLogin = function(req, res) {

};
const userSignup = function(req, res) {

};
const createCapsule = function(req, res) {

};
const unlockCapsule = function(req, res) {
    console.log(req.body);
    console.log(req.body.deceased);
    if (req.body.deceased && req.body.datePassing) {
        var passingEvent = new Passing ({
            "deceased": req.body.deceased,
            "datePassing": req.body.datePassing
        });
        passingEvent.save(function(err, event){
            if (err) {
                return next(err)
            }
            else{
                return res.redirect("/userInbox")
            }
        });
    }
};
const updateAccount = function(req, res) {

};



module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    unlockRoute: unlockRoute,
    userWelcomeRoute: userWelcomeRoute,
    userInboxRoute:userInboxRoute,
    accountRoute: accountRoute,
    account2Route: account2Route,
    createRoute: createRoute,
    blankRoute: blankRoute,
    viewRoute: viewRoute,
    userLogin: userLogin,
    userSignup: userSignup,
    createCapsule: createCapsule,
    unlockCapsule: unlockCapsule,
    updateAccount: updateAccount
};