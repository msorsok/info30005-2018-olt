
var express = require("express");
var bodyParser = require("body-parser");
require("./models/db.js");
var router = require('./routes/routes');
var path = require('path');
var passport = require('passport');
var flash    = require('connect-flash');
var bb = require('express-busboy');


var app = express();
bb.extend(app, {
    upload: true,
    path: "./uploads",
    allowedPath: /./
});
require('./config/passport')(passport);
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


app.use(express.static('public'));

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs');

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use('/', router)
require('./config/passport')(passport);

app.get('*', function(req, res){
    res.status(404).send('Oops you took a wrong turn.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});

// adding a comment
