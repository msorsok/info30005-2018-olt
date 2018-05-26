var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var user = mongoose.model("user");
var capsule = mongoose.model("capsule");
var image = mongoose.model("img");
var video = mongoose.model("video");
var fs = require('fs');
var del = require("del");
var passport = require("passport");

const createCapsule = function(req, res) {
    if (req.body.recipient0) {
        var recipientList = [];
        recipientList.push(req.body.recipient0);
        var recipientCount = 1;
        while (true){
            var name = "recipient" + recipientCount;
            if (!req.body[name]){
                break
            }
            recipientList.push(req.body[name]);
            recipientCount ++;
        }
        var newCapsule = new capsule ({
            "dateCreated": Date.now(),
            "released": false,
            "senderFirstName": req.user.firstName,
            "senderLastName" : req.user.lastName
        });

        if (req.body.note){
            newCapsule.note = req.body.note;
        }
        if (req.files.imageInput){
            var images = [];
            if (!(req.files.imageInput instanceof Array) ){
                var input = [req.files.imageInput];
            }
            else{
                var input = req.files.imageInput;
            }
            input.forEach(function(element){
                    var newImage  = new image ({
                        data: fs.readFileSync(element.file),
                        contentType: element.mimetype
                    });
                    images.push(newImage._id);
                    newImage.save();
                    del("uploads/" + element.uuid + "/**");

                }
            );
            newCapsule.img = images;
        }
        if (req.files.videoInput){
            var videos = [];
            if (!(req.files.videoInput instanceof Array) ){
                var input = [req.files.videoInput];
            }
            else{
                var input = req.files.videoInput;
            }
            input.forEach(function(element){
                    var newVideo  = new video ({
                        data: fs.readFileSync(element.file),
                        contentType: element.mimetype
                    });
                    videos.push(newVideo._id);
                    newVideo.save();
                    del("uploads/" + element.uuid + "/**");

                }
            );
            newCapsule.video = videos;
        }
        var newCapsulesSent = {};
        newCapsulesSent.capsulesSent = req.user.capsulesSent;
        newCapsulesSent.capsulesSent.push(newCapsule);
        user.findByIdAndUpdate(req.user._id, {$set: newCapsulesSent}, function(err, doc) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("about to redirect");
                res.redirect("/");
            }
        });
    }


};
const releaseCapsule = function(req, res) {
    if (req.body.deceased && req.body.datePassing) {
        var passingEvent = new passing ({
            "deceased": req.body.deceased,
            "datePassing": req.body.datePassing
        });
        passingEvent.save(function(err, event){
            if (err) {
                return next(err)
            }
        }

        );
    }

};
const updateAccount = function(req, res) {
    console.log("updating account");
    var newData = {};
    if (req.body.firstName){
        newData.firstName = req.body.firstName;
    }
    if (req.body.lastName){
        newData.lastName = req.body.lastName;
    }
    if (req.body.dateOfBirthF) {
        newData.dateOfBirthF = req.body.dateOfBirthF;
    }
    if (req.body.nominee1email) {
        newData.nominee1email = req.body.nominee1email;
    }
    if (req.body.nominee2email) {
        newData.nominee2email = req.body.nominee2email;
    }
    console.log("req.body is");
    console.log(req.body);
    console.log("the req.files. are");
    console.log(req.files.profilePic);


    if (req.files.profilePic) {
        console.log("file has been sent");
        var input = [req.files.profilePic];
        input.forEach(function(element) {
            var newFile  = new file ({
                data: fs.readFileSync(element.file),
                contentType: element.mimetype
            });
            newData.profilePic = newFile;
            del("uploads/" + element.uuid + "/**");
        });

    }
    console.log(req.user);
    /*findOneAndUpdate(condition, update, callback)
    * returns the first document to match all conditions specified in condition
    * update all the values specified in update argument
    * execute the callback function
     */
    user.findByIdAndUpdate(req.user._id, {$set: newData}, function(err, doc) {
        if(err) {
            next(err);
        }
        else {
            res.redirect("/account");
        }
    })
};

const registerUser = function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var username = req.body.username;
    var password = req.body.password;
    var dateOfBirthF = req.body.dateOfBirthF;

    // Validation
    req.checkBody('firstName', 'First Name is required').notEmpty();
    req.checkBody('lastName', 'Last Name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    req.checkBody('dateOfBirthF', 'Date of birth is required').notEmpty();


    if(req.validationErrors()) {
        var errors = [];
        req.validationErrors().forEach(function (error) {
            errors.push(error.msg);
        });
    }
    console.log(errors);
    if (errors) {
        console.log("errors found aborting");
        res.render('login', {
            message: errors
        });
    }
    else {
        //checking for email and username are already taken
        user.findOne({ username: {
                "$regex": "^" + username + "\\b", "$options": "i"
            }}, function (err, account) {

            if (account) {
                console.log("account found");
                req.flash("error_msg", "Account already exists, please login");
                res.redirect('/login');
            }
            else {
                var newUser = new user({
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirthF:dateOfBirthF,
                    username: username,
                    password: password,
                    profilePic: null,
                    nominee1email: "",
                    nominee2email: "",
                    capsulesReceived: [],
                    capsulesSent: []
                });
                user.createUser(newUser, function (err, account) {
                    if (err) throw err;
                });
                req.flash('success_msg', 'You are registered and can now login');
                res.redirect("/login");
            }
        });
    }
};

const login = function (req, res) {
    res.redirect('/');
};


module.exports = {
    registerUser: registerUser,
    createCapsule: createCapsule,
    releaseCapsule: releaseCapsule,
    updateAccount: updateAccount,
    login: login
};