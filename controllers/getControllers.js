var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var capsule = mongoose.model("capsule");
var video = mongoose.model("video");
var user = mongoose.model("user");
var fs = require('fs');

const loginRoute = function(req, res) {
    var errorMessages = [];
    if (res.locals.success_msg){
         errorMessages.push(res.locals.success_msg);
    }
    if(res.locals.error_msg){
        errorMessages.push(res.locals.error_msg);
    }
    console.log(errorMessages);
    res.render('login',{message: errorMessages});
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
    if (req.user.capsulesReceived.length + req.user.capsulesSent.length > 0){
        res.redirect("/");
    }
    else{
        res.render('user_welcome', req.user);
    }
};
const userInboxRoute = function (req,res) {
    console.log(req.user.capsulesReceived.length + req.user.capsulesSent.length );
    if (req.user.capsulesReceived.length + req.user.capsulesSent.length > 0){
        res.render('user_inbox', req.user);
    }
    else{
        res.redirect("/userWelcome");
    }
};

const logoutRoute = function (req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
};

const profilePicRoute = function (req, res) {
    if (req.user.profilePic){
        res.contentType(req.user.profilePic.contentType);
        res.send(req.user.profilePic.data);
    }
    else{
        res.contentType("image/jpeg");
        res.send(fs.readFileSync("/res/user.jpg"));
    }
};

const viewCapsuleSentRoute = function (req, res) {
    console.log(req.params.id);
    user.find({_id: req.params.id}, function (err, docs){
        console.log(docs);
    });
    user.findOne({_id: req.params.id}, function (err, capsule) {
        if (err) {
            res.send("Capsule was not found");
        }
        else {
            console.log(capsule);
            res.render("preview_capsule", capsule);
        }
    });
};

const viewCapsuleReceivedRoute = function (req, res) {
    var targetCapsule = user.findOne({_id: req.params.id});
    if (targetCapsule){
        res.render("view_capsule", targetCapsule);
    }
    else{
        res.send("Capsule was not found");
    }
};

const capsuleContentsRoute = function (req, res) {
    var thisCapsule = user.findOne({_id: req.params.capsuleid});
    console.log(thisCapsule);
    var target;
    var images = thisCapsule.img;
    images.forEach(function (image) {
        if (image._id == params.contentsid) {
            console.log(image);
            target = image;
        }
    });
    if (target){
        console.log(target.contentType);
        res.contentType(target.contentType);
        res.send(target);
    }
    else{
        res.send("Target was not found");
    }
};



module.exports = {
    loginRoute: loginRoute,
    releaseRoute: releaseRoute,
    userWelcomeRoute: userWelcomeRoute,
    userInboxRoute: userInboxRoute,
    accountRoute: accountRoute,
    createRoute: createRoute,
    logoutRoute: logoutRoute,
    profilePicRoute: profilePicRoute,
    viewCapsuleSentRoute: viewCapsuleSentRoute,
    viewCapsuleReceivedRoute: viewCapsuleReceivedRoute,
    capsuleContentsRoute: capsuleContentsRoute
};