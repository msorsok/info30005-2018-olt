var express = require("express");
var router = require('./routes/routes');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

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
