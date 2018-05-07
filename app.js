require("./models/db.js");
var express = require("express");
var router = require('./routes/routes');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

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
