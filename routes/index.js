
var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllers');
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('userWelcome');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('login');
	}
}

router.get('/login',function(req,res){
    res.render('login');
})
router.get('/userWelcome',function(req,res){
    res.render('user_welcome');
});
router.get('/', controller.loginRoute);
router.get("/blank", controller.blankRoute);
router.get("/unlock", controller.unlockRoute);
router.get("/account", controller.accountRoute);
router.get("/create", controller.createRoute);
router.get("/userInbox",controller.userInboxRoute);
router.get("/account2", controller.account2Route);
router.get("/view/:id", controller.viewRoute);
router.post("/create", controller.createCapsule);
router.post("/unlock", controller.unlockCapsule);
router.post("/account", controller.updateAccount);


module.exports = router;