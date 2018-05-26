function mouseOver(el) {
    return  function() {
        el.style.backgroundColor = "#443266";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#443266";
            }
        }
    }
}

function mouseOut(el) {
    return  function() {
        el.style.backgroundColor = "#957ead";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#957ead";
            }
        }
    }
}

function mouseClick(link) {
    switch(link){
        case "homeNav":
            link = "userInbox";
            break;
        case "accountNav":
            link = "account";
            break;
        case "releaseNav":
            link = "release";
            break;
        case "createNav":
            link = "create";
            break;
    }
    return function() {
        window.location.href = "/" + link;
    }
}

// making all sidebar buttons clickable
var els = document.getElementsByClassName("navigation")[0].children;
for (var i = 0 ; i < els.length; i++) {
    els[i].addEventListener("mouseover", mouseOver(els[i]));
    els[i].addEventListener("mouseout", mouseOut(els[i]));
    els[i].addEventListener("click", mouseClick(els[i].className));
}

document.getElementsByClassName("logout")[0].addEventListener("click", mouseClick("logout"));

var els = document.getElementsByClassName("logo")[0].children;
for (var i = 0 ; i < els.length; i++) {
    els[i].addEventListener("click", mouseClick("userInbox"));
}

