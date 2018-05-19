var mongoose = require("mongoose");
var passing = mongoose.model("passing");
var user = mongoose.model("user");
var capsule = mongoose.model("capsule");
var image = mongoose.model("img");
var video = mongoose.model("video");
var file = mongoose.model("file");
var fs = require('fs');
var del = require("del");
var db = require("../models/db.js");
require("../config/passport.js")
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

const releaseRoute = function(req, res) {
    res.render("release");
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
    res.render('view_capsule', db[req.params.id]);
};
const userLogin = function(req, res) {

};
const userSignup = function(req, res) {

};
const userSignup2 = function(req, res) {
    if (req.body.firstName &&
        req.body.lastName &&
        req.body.emailF &&
        req.body.passwordF &&
        req.body.dateOfBirthF) {
        var userCreate = new user ({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "dateOfBirthF": req.body.dateOfBirthF,
            "emailF": req.body.emailF,
            "passwordF": req.body.passwordF,
            "nominee1email":"Add Email",
            "nominee2email":"Add Email"
        });
        userCreate.save(function(err, event){
            if (err) {
                return next(err)
            }
            else{
                return res.redirect("/userWelcome")
            }
        });
    }
};
const createCapsule = function(req, res) {
    console.log(req.body);
    console.log(req.files);
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
            "recipients": recipientList,
            "released": false
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
                images.push(newImage);
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
                    videos.push(newVideo);
                    del("uploads/" + element.uuid + "/**");

                }
            );
            newCapsule.video = videos;
        }

        if (req.files.fileInput){
            var files = [];
            if (!(req.files.fileInput instanceof Array) ){
                var input = [req.files.fileInput];
            }
            else{
                var input = req.files.fileInput;
            }
            input.forEach(function(element){
                    var newFile  = new file ({
                        data: fs.readFileSync(element.file),
                        contentType: element.mimetype
                    });
                    files.push(newFile);
                    del("uploads/" + element.uuid + "/**");
                }
            );
            newCapsule.file = files;
        }

        newCapsule.save(function(err, cap){
            if (err) {
                return next(err);
            }
            else{
                return res.redirect("/userInbox");
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
            else{
                return res.redirect("/userInbox")
            }
        });
    }
};
const updateAccount = function(req, res) {
    console.log("updating account");

    const query = {"_id": "5aeffe1fed298801985194e5"};

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

    /*findOneAndUpdate(condition, update, callback)
    * returns the first document to match all conditions specified in condition
    * update all the values specified in update argument
    * execute the callback function
     */
    user.findOneAndUpdate(query, {$set: newData}, function(err, doc) {
        if(err) {
            next(err);
        }
        else {
            return res.redirect("/account");
        }
    })
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = {
    comingSoonRoute: comingSoonRoute,
    loginRoute: loginRoute,
    releaseRoute: releaseRoute,
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
    releaseCapsule: releaseCapsule,
    updateAccount: updateAccount
};