var express = require("express");
var controller = require('../controllers/controllers');
var router = express.Router();


// Coming soon page
router.get('/', controller.comingSoonRoute);
router.get("/login", controller.loginRoute );
router.get("/blank", controller.blankRoute);
router.get("/account", controller.accountRoute);
router.get("/newmessage", controller.newMessageRoute);
module.exports = router;
