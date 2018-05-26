var express = require("express");
var getController = require('../controllers/getControllers');
var postController = require('../controllers/postControllers');
var router = express.Router();
var passportUtilities = require("../controllers/passportUtilities");

// Get Requests
router.get('/', passportUtilities.ensureAuthenticated, getController.rootRoute);
router.get("/release", passportUtilities.ensureAuthenticated, getController.releaseRoute);
router.get("/account", passportUtilities.ensureAuthenticated, getController.accountRoute);
router.get("/create", passportUtilities.ensureAuthenticated, getController.createRoute);
router.get("/userWelcome", passportUtilities.ensureAuthenticated, getController.userWelcomeRoute);
router.get("/userInbox", passportUtilities.ensureAuthenticated, getController.userInboxRoute);
router.get('/profilePic', passportUtilities.ensureAuthenticated, getController.profilePicRoute);
router.get('/capsuleSent/:id', passportUtilities.ensureAuthenticated, getController.viewCapsuleSentRoute);
router.get("/capsuleReceived/:id", passportUtilities.ensureAuthenticated, getController.viewCapsuleReceivedRoute);
router.get('/login', getController.loginRoute);
router.get('/logout', getController.logoutRoute);



//Post Requests
router.post("/create", passportUtilities.ensureAuthenticated, postController.createCapsule);
router.post("/release", passportUtilities.ensureAuthenticated, postController.releaseCapsule);
router.post("/account", passportUtilities.ensureAuthenticated, postController.updateAccount);
router.post('/register', postController.registerUser);
router.post('/login', passportUtilities.authenticate, postController.login);


module.exports = router;
