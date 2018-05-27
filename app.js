require("./models/db.js");
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var bb = require('express-busboy');
var router = require('./routes/routes');

// Init App
var app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.use(bodyParser()); // get information from html forms
bb.extend(app, {
    upload: true,
    path: "./uploads",
    allowedPath: /./
});

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//bb was here initially
// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Connect Flash
app.use(flash());
// Passport init
app.use(passport.initialize());
app.use(passport.session());
// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));



// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.use('/', router);
app.get('*', function(req, res){
    res.status(404).send('Oops you took a wrong turn.');
});

// View Engine
app.set('view engine', 'ejs');


// Set Static Folder


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Express listening on port" + PORT);
});
