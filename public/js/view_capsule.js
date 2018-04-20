function nextVideo() {
    var videos = document.getElementsByClassName("video");
    videos.forEach(function (video, i){
            if (i+1 == videos.length){
                    return;
            }
            if (video.childNodes[1].style.display == "inherit" ){
                    video.childNodes[1].style.display == "";
                    videos[i+1].childNodes[1].style.display = "inherit";
                    return;
            }
    });
}

var nextVideoButton  = document.getElementsByClassName("nextVideo")[0];
nextVideoButton.addEventListener("click", nextVideo);

var videos = document.getElementsByClassName("video");
videos[0].childNodes[1].style.display = "inherit";



