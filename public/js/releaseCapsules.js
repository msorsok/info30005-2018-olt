/*function mouseOver() {
    document.getElementsByClassName("Account").children.style.backgroundColor = "#888888";
    console.log("worked");
}
*/

function mouseOver(el) {
    return  function() {
        console.log(el.childNodes);
        console.log(Node.ELEMENT_NODE);
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
        console.log(el.childNodes);
        console.log(Node.ELEMENT_NODE);
        el.style.backgroundColor = "#957ead";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#957ead";
            }
        }
    }
}


var els = document.getElementsByClassName("sidebar")[0].children;
console.log(els);
for (var i = 0 ; i < els.length; i++) {
    console.log(els[i]);
    els[i].addEventListener("mouseover", mouseOver(els[i]));
    els[i].addEventListener("mouseout", mouseOut(els[i]));

}




//document.getElementsByClassName("Account").addEventListener("mouseout", mouseOut);