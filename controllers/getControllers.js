var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var capsule = mongoose.model("capsule");
var video = mongoose.model("video");
var db = require("../models/db.js");

const rootRoute = function(req, res){
    req.logout();
    res.render('login');
};

const loginRoute = function(req, res) {
    res.render('login');
};

const accountRoute = function(req, res) {
    res.render('account', req.user);
};

const releaseRoute = function(req, res) {
    res.render("release", req.user);
};
const createRoute = function(req, res) {
    res.render('newmessage', req.user);
};
const userWelcomeRoute = function (req,res) {
    res.render('user_welcome', req.user);
};
const userInboxRoute = function (req,res) {
    res.render('user_inbox', req.user);
};

const logoutRoute = function (req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
};

const profilePicRoute = function (req, res) {
    res.contentType(req.user.profilePic.contentType);
    res.send(req.user.profilePic.data);
};

const viewCapsuleSentRoute = function (req, res) {
    var targetCapsule;
    console.log(req.params.id);
    console.log(req.user);
    req.user.capsulesSent.forEach(function(capsule){
        console.log(capsule._id);
        if (capsule._id == req.params.id){
            targetCapsule = capsule;
        }
    });
    if (targetCapsule  != null){
        targetCapsule.firstName = req.user.firstName;
        res.render("preview_capsule", targetCapsule);
    }
    else{
        res.send("Capsule was not found");
    }
};

const viewCapsuleReceivedRoute = function (req, res) {
    var targetCapsule;
    console.log(req.params.id);
    console.log(req.user);
    req.user.capsulesSent.forEach(function(capsule){
        console.log(capsule._id);
        if (capsule._id == req.params.id){
            targetCapsule = capsule;
        }
    });
    if (targetCapsule){
        targetCapsule.firstName = req.user.firstName;
        res.render("view_capsule", targetCapsule);
    }
    else{
        res.send("Capsule was not found");
    }
};



module.exports = {
    rootRoute: rootRoute,
    loginRoute: loginRoute,
    releaseRoute: releaseRoute,
    userWelcomeRoute: userWelcomeRoute,
    userInboxRoute:userInboxRoute,
    accountRoute: accountRoute,
    createRoute: createRoute,
    logoutRoute: logoutRoute,
    profilePicRoute: profilePicRoute,
    viewCapsuleSentRoute: viewCapsuleSentRoute,
    viewCapsuleReceivedRoute: viewCapsuleReceivedRoute
};