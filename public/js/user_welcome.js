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

var createButton = document.getElementById("create");
createButton.addEventListener("mouseout", mouseOut(createButton));
createButton.addEventListener("mouseover",mouseOver(createButton));

var releaseButton = document.getElementById("release");
releaseButton.addEventListener("mouseout", mouseOut(releaseButton));
releaseButton.addEventListener("mouseover",mouseOver(releaseButton));
