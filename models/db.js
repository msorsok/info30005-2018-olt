

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
}
var database = {
    Mina: mina,
    Eduardo: eduardo,
    Luis: luis

};

module.exports = database;