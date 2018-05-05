var express = require("express");
var controller = require('../controllers/controllers');
var router = express.Router();

router.get('/', controller.loginRoute);
router.get("/blank", controller.blankRoute);
router.get("/unlock", controller.unlockRoute);
router.get("/account", controller.accountRoute);
router.get("/create", controller.createRoute);
router.get("/userWelcome", controller.userWelcomeRoute);
router.get("/userInbox",controller.userInboxRoute);
router.get("/account2", controller.account2Route);
router.get("/view/:id", controller.viewRoute);

router.post("/login", controller.userLoginPost);
router.post("/signup", controller.userSignupPost);
router.post("/create", controller.createPost);
router.post("/unlock", controller.unlockPost);




module.exports = router;
