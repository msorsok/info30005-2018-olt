var express = require("express");
var router = require('./routes/routes');

var app = express();
app.set('view engine', 'ejs');
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
//var path = require('path')
//app.use(express.static(path.join(__dirname, 'public')));

