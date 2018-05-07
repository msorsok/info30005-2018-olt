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

router.post("/login", controller.userLogin);
router.post("/signup", controller.userSignup);
router.post("/create", controller.createCapsule);
router.post("/unlock", controller.unlockCapsule);
router.post("/account", controller.updateAccount);



module.exports = router;
