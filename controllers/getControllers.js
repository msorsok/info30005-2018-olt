var mongoose = require("mongoose");
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
    var errorMessages = [];
    if (res.locals.success_msg){
        errorMessages.push(res.locals.success_msg);
    }
    if(res.locals.error_msg){
        errorMessages.push(res.locals.error_msg);
    }
    console.log(errorMessages);
    req.user.message = errorMessages;
    res.render('account', req.user);
};

const releaseRoute = function(req, res) {
    return res.render("release", {firstName: req.user.firstName, dependents: req.user.dependents});
};

const createRoute = function(req, res) {
    var errorMessages = [];
    if (res.locals.success_msg){
        errorMessages.push(res.locals.success_msg);
    }
    if(res.locals.error_msg){
        errorMessages.push(res.locals.error_msg);
    }
    var data = req.user;
    data.message = errorMessages;
    res.render('newmessage', data);
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
    res.redirect('/login');
};

const profilePicRoute = function (req, res) {
    console.log("profile pic route");
    console.log(req.user.profilePic);
    if(!req.user.profilePic){
        res.type("png");
        res.send(fs.readFileSync("public/res/user.png"));
    }
    else{
        image.findOne({_id: req.user.profilePic}, function(err, photo){
            if (!photo) {
                console.log("missing photo from db");
                res.type("png");
                return res.send(fs.readFileSync("public/res/user.png"));
            }
            else{
                console.log("the photo");
                console.log(photo);
                res.contentType(photo.contentType);
                return res.send(photo.data);
            }
        });
    }
};

const viewCapsuleSentRoute = function (req, res) {
    user.findOne({_id: req.user._id}, function(err, account){
        if(account){
            console.log("capsules sent");
            console.log(account.capsulesSent);
            for(var i=0; i<account.capsulesSent.length;i++) {
                if (account.capsulesSent[i]._id == req.params.id) {
                    req.user.capsule = account.capsulesSent[i];
                    return res.render("preview_capsule", req.user);
                }
            }
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
            for(var i=0; i<account.capsulesReceived.length;i++) {
                if (account.capsulesReceived[i]._id == req.params.id) {
                    req.user.capsule = account.capsulesReceived[i];
                    console.log("capsule");
                    console.log(account.capsulesReceived[i]);
                    console.log(req.params.id);
                    return res.render("view_capsule", req.user);
                }
            }
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