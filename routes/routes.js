var express = require("express");
var controller = require('../controllers/controllers');
var router = express.Router();
var passport = require("passport");
require("../config/passport.js")
router.get('/', controller.loginRoute);
router.get("/blank", controller.blankRoute);
router.get("/unlock", controller.unlockRoute);
router.get("/account", controller.accountRoute);
router.get("/create", controller.createRoute);
router.get("/userWelcome", controller.userWelcomeRoute);
router.get("/userInbox",controller.userInboxRoute);
router.get("/account2", controller.account2Route);
router.get("/view/:id", controller.viewRoute);

router.post('/signUp', passport.authenticate('local-signup', {
    successRedirect : '/userWelcome', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

//router.post("/loginUser", controller.userLogin);
router.post('/loginUser', passport.authenticate('local-login', {
    successRedirect : '/userWelcome', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
router.post("/create", controller.createCapsule);
router.post("/unlock", controller.unlockCapsule);
router.post("/account", controller.updateAccount);



module.exports = router;
