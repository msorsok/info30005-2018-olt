var mongoose = require("mongoose");
var db = require("../models/db.js");
var Passing = mongoose.model("Passing");
var User = mongoose.model("User");
var UserSignUp = mongoose.model("User");

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
    console.log("Hello")
    console.log(req.body);
    console.log(req.body.deceased);
    if (req.body.firstName &&
        req.body.lastName &&
        req.body.emailF &&
        req.body.passwordF &&
        req.body.dateOfBirthF) {
        var userCreate = new UserSignup ({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "DOB": req.body.dateOfBirthF,
            "email": req.body.emailF,
            "password": req.body.passwordF

        });
        userCreate.save(function(err, event){
            if (err) {
                return next(err)
            }
            else{
                return res.redirect("/userInbox")
            }
        });
    }
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
    console.log("updating account");

    const query = {"firstName": "newFirstName"};

    console.log("query field created");
    /*only update name*/
    var newData = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "dateOfBirthF": req.body.DOB
    };

    console.log("ready to update data");
    /*findOneAndUpdate(condition, update, callback)
    * returns the first document to match all conditions specified in condition
    * update all the values specified in update argument
    * execute the callback function
     */
    User.findOneAndUpdate(query, {$set: newData}, function(err, doc) {
        if(err) {
            next(err);
        }
        else {
            return res.redirect("/account");
        }
    })
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