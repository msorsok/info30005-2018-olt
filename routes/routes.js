var express = require("express");
var controller = require('../controllers/controllers');
var router = express.Router();



router.get('/', controller.comingSoonRoute);
router.get("/login", controller.loginRoute );
router.get("/blank", controller.blankRoute);
router.get("/account", controller.accountRoute);
router.get("/newmessage", controller.newMessageRoute);
router.get("/userWelcome", controller.userWelcomeRoute);
router.get("/userInbox",controller.userInboxRoute);
router.get("/release", controller.releaseRoute);
module.exports = router;
