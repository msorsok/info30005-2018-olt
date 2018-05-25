var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var user = mongoose.model("User");
var capsule = mongoose.model("capsule");
var image = mongoose.model("img");
var video = mongoose.model("video");
var file = mongoose.model("file");
var fs = require('fs');
var del = require("del");
var db = require("../models/db.js");

const rootRoute = function(req, res){
    req.logout();
    res.render('login');
};

const comingSoonRoute = function(req, res) {
    res.render('comingsoon');
};

const loginRoute = function(req, res) {
    res.render('login');
};

const accountRoute = function(req, res) {
    console.log("account accessed");
    res.render('account', {firstName: req.user.firstName});
};

const account2Route = function(req, res) {
    res.render('account2');
};

const releaseRoute = function(req, res) {
    console.log("releasepage accessed");
    res.render("release", {firstName: req.user.firstName});
};
const createRoute = function(req, res) {
    console.log("new capsule page accessed");
    res.render('newmessage', {firstName: req.user.firstName});
};
const userWelcomeRoute = function (req,res) {
    console.log("user_welcome accessed");
    res.render('user_welcome', {firstName: req.user.firstName});
};
const userInboxRoute = function (req,res) {
    console.log("user_inbox accessed");
    res.render('user_inbox', {firstName: req.user.firstName});
};
const viewRoute = function (req,res) {
    console.log("view_ accessed");
    res.render('view_capsule', db[req.params.id], {firstName: req.user.firstName});
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

const capsuleSentRoute = function (req, res) {
    var targetCapsule;
    console.log("hello");
    console.log(req.params.id);
    console.log(req.user);
    req.user.capsulesSent.forEach(function(capsule){
        console.log(capsule._id);
        if (capsule._id == req.params.id){
            targetCapsule = capsule;
        }
    });
    if (targetCapsule  != null){
        res.send(targetCapsule);
    }
    else{
        res.send("not found");
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
    viewRoute: viewRoute,
    logoutRoute: logoutRoute,
    profilePicRoute: profilePicRoute,
    capsuleSentRoute: capsuleSentRoute
};