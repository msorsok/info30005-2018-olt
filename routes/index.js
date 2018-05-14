var express = require('express');
var router = express.Router();

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
module.exports = router;