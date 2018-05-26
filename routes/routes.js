var express = require("express");
var getController = require('../controllers/getControllers');
var postController = require('../controllers/postControllers');
var router = express.Router();
var passportUtilities = require("../controllers/passportUtilities");

// Get Requests
router.get('/', getController.ensureAuthenticated, getController.rootRoute);
router.get("/release", getController.ensureAuthenticated, getController.releaseRoute);
router.get("/account", getController.ensureAuthenticated, getController.accountRoute);
router.get("/create", getController.ensureAuthenticated, getController.createRoute);
router.get("/userWelcome", getController.ensureAuthenticated, getController.userWelcomeRoute);
router.get("/userInbox", getController.ensureAuthenticated, getController.userInboxRoute);
router.get("/view/:id", getController.ensureAuthenticated, getController.viewRoute);
router.get('/profilePic', getController.ensureAuthenticated, getController.profilePicRoute);
router.get('/login', getController.loginRoute);
router.get('/logout', getController.logoutRoute);


//Post Requests
router.post("/create", postController.createCapsule);
router.post("/release", postController.releaseCapsule);
router.post("/account", postController.updateAccount);
router.post('/register', postController.registerUser);
router.post('/login', passportUtilities.authenticate, postController.login);


module.exports = router;
