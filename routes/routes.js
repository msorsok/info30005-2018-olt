var express = require("express");
var controller = require('../controllers/controllers');
var router = express.Router();



router.get('/', controller.comingSoonRoute);
router.get("/login", controller.loginRoute );
router.get("/blank", controller.blankRoute);
router.get("/userWelcome", controller.userWelcomeRoute);
router.get("/userInbox",controller.userInboxRoute);
module.exports = router;
