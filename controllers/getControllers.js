var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var capsule = mongoose.model("capsule");
var video = mongoose.model("video");
var image = mongoose.model("img");
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
    user.findOne({_id: req.user._id}, function(err, account){
        if(account){
            console.log("capsules sent");
            console.log(account.capsulesSent);
            account.capsulesSent.forEach(function (capsule) {
                console.log("capsule");
                console.log(capsule);
                if (capsule._id == req.params.id) {
                    req.user.capsule = capsule;
                    return res.render("preview_capsule", req.user);
                }
            });
        }
        else{
            console.log("user not found");
            res.redirect("/");
        }
    });
};

const viewCapsuleReceivedRoute = function (req, res) {
    user.findOne({_id: req.user._id}, function(err, account){
        if(account){
            console.log("capsules sent");
            console.log(account.capsulesReceived);
            account.capsulesReceived.forEach(function (capsule) {
                console.log("capsule");
                console.log(capsule);
                if (capsule._id == req.params.id) {
                    req.user.capsule = capsule;
                    return res.render("view_capsule", req.user);
                }
            });
        }
        else{
            console.log("user not found");
            res.redirect("/");
        }
    });
};

const capsuleVideoRoute = function (req, res) {
    video.findOne({_id: req.params.id}, function(err, video){
        if(video){
            res.contentType(video.contentType);
            res.send(video.data);
        }
        else{
            res.send("Video not found");
        }
    });
};

const capsuleImageRoute = function (req, res) {
    image.findOne({_id: req.params.id}, function(err, img){
        if(img){
            res.contentType(img.contentType);
            res.send(img.data);
        }
        else{
            res.send("Image not found");
        }
    });
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
    capsuleVideoRoute: capsuleVideoRoute,
    capsuleImageRoute: capsuleImageRoute
};