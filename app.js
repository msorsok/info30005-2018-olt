
var express = require("express");
var bodyParser = require("body-parser");
require("./models/db.js");
var router = require('./routes/routes');
var path = require('path');

var bb = require('express-busboy');


var app = express();
bb.extend(app, {
    upload: true,
    path: "./uploads",
    allowedPath: /./
});


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', router);

app.get('*', function(req, res){
    res.status(404).send('Oops you took a wrong turn.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});

// adding a comment
