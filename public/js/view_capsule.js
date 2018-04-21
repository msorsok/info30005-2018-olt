function prevMouseOver(el, type) {
    return  function() {
        var items = document.getElementsByClassName(type);
        if (items[0].style.display == "inherit" ){
            return;
        }
        el.style.color = "#56327d";
        el.style.cursor = "pointer";

    }
}

function nextMouseOver(el, type) {
    return  function() {
        var items = document.getElementsByClassName(type);
        if (items[items.length - 1].style.display == "inherit"){
            return;
        }
        el.style.color = "#56327d";
        el.style.cursor = "pointer";
    }
}


function mouseOut(el) {
    return  function() {
        el.style.color = "#957ead";
        el.style.cursor = "auto";
    }
}




function nextItem(type) { return function(){
    var items = document.getElementsByClassName(type);
    console.log(items);
    for (var i = 0; i<items.length-1; i++){
        if (items[i].style.display == "inherit" ){
            items[i].style.display = "";
            items[i+1].style.display = "inherit";
            return;
        }
    }
}}

function prevItem(type) { return  function (){
    var items = document.getElementsByClassName(type);
    if (items[0].style.display == "inherit" ){
        return;
    }
    for (var i = 1; i<items.length; i++){
        if (items[i].style.display == "inherit" ){
            items[i].style.display = "";
            items[i-1].style.display = "inherit";
            return;
        }
    }
}}

var nextVideoButton  = document.getElementsByClassName("nextVideo")[0];
nextVideoButton.addEventListener("click", nextItem("video"));
nextVideoButton.addEventListener("mouseover", nextMouseOver(nextVideoButton, "video"));
nextVideoButton.addEventListener("mouseout", mouseOut(nextVideoButton));


var prevVideoButton  = document.getElementsByClassName("prevVideo")[0];
prevVideoButton.addEventListener("click", prevItem("video"));
prevVideoButton.addEventListener("mouseover", prevMouseOver(prevVideoButton, "video"));
prevVideoButton.addEventListener("mouseout", mouseOut(prevVideoButton));

var nextPhotoButton  = document.getElementsByClassName("nextPhoto")[0];
nextPhotoButton.addEventListener("click", nextItem("photo"));
nextPhotoButton.addEventListener("mouseover", nextMouseOver(nextPhotoButton, "photo"));
nextVideoButton.addEventListener("mouseout", mouseOut(nextPhotoButton));

var prevPhotoButton  = document.getElementsByClassName("prevPhoto")[0];
prevPhotoButton.addEventListener("click", prevItem("photo"));
prevPhotoButton.addEventListener("mouseover", prevMouseOver(prevPhotoButton, "photo"));
prevPhotoButton.addEventListener("mouseout", mouseOut(prevPhotoButton));

//Setting first video and photo visible
document.getElementsByClassName("video")[0].style.display = "inherit";
document.getElementsByClassName("photo")[0].style.display = "inherit";




