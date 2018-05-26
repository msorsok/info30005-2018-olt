var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var user = require('../models/user');

const ensureAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    else {
        req.flash('error_msg','You are not logged in');
        res.redirect('/login');
    }
};


const authenticate =
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    });


passport.use(new LocalStrategy(
    function (username, password, done) {
        user.getUserByUsername(username, function (err, account) {
            if (err) throw err;
            if (!account) {
                return done(null, false, { message: 'Unknown User' });
            }

            user.comparePassword(password, account.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, account);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    user.getUserById(id, function (err, user) {
        done(err, user);
    });
});


module.exports = {
    ensureAuthenticated: ensureAuthenticated,
    authenticate: authenticate
};