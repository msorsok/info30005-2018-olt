function mouseOver(el) {
    return  function() {
        el.style.backgroundColor = "#56327d";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#56327d";
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
    return function() {
        window.location.href = link;
    }
}


var els = document.getElementsByClassName("sidebar")[0].children;
for (var i = 0 ; i < els.length; i++) {
    els[i].addEventListener("mouseover", mouseOver(els[i]));
    els[i].addEventListener("mouseout", mouseOut(els[i]));
    els[i].addEventListener("click", mouseClick(els[i].className));
}


