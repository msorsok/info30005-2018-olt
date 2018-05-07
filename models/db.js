var mongoose = require("mongoose");
mongoose.connect("mongodb://adminlasttime:iloveweb123@ds215370.mlab.com:15370/onelasttime", function(err) {
    if(!err){
        console.log("connected to mongo");
    } else {
        console.log("failed to connect to mongo");
    }
});

require("./passing.js");







var photos = ["/res/photo1.jpg", "/res/photo2.jpg", "/res/photo3.jpg"];
var videos = ["/res/video1.mp4", "/res/video2.mp4", "/res/video3.mp4"];
var mina = {
    name: "Mina",
    photos:photos,
    videos:videos
};

var eduardo = {
    name: "Eduardo",
    photos:photos,
    videos:videos
};
var luis = {
    name: "Luis",
    photos:photos,
    videos:videos
};

var farah = {
    name: "Farah",
    photos:photos,
    videos:videos
};

var database = {
    Mina: mina,
    Eduardo: eduardo,
    Luis: luis,
    Farah: farah
};

module.exports = database;