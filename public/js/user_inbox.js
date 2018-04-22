function mouseOver(el) {
    return  function() {
        el.style.backgroundColor = "#aaa";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                //console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#aaa";
            }
        }
    }
}

function mouseOut(el) {
    return  function() {
        el.style.backgroundColor = "#fff";
        for (var i = 0 ; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                //console.log(el.childNodes[i]);
                el.childNodes[i].style.backgroundColor = "#fff";
            }
        }
    }
}

function mouseClick(link) {
    return function() {
        window.location.href = link;
    }
}



var inbox = document.getElementsByClassName("inboxAllEmails")[0].children;

for (var i = 0 ; i < inbox.length; i++) {
    inbox[i].addEventListener("mouseover", mouseOver(inbox[i]));
    inbox[i].addEventListener("mouseout", mouseOut(inbox[i]));
    console.log(inbox[i].children[0].childNodes[0]);
    inbox[i].addEventListener("click", mouseClick("view/" + inbox[i].children[0].childNodes[0].data));
}

var sent = document.getElementsByClassName("allSentEmails")[0].children;

for (var i = 0 ; i < sent.length; i++) {
    sent[i].addEventListener("mouseover", mouseOver(sent[i]));
    sent[i].addEventListener("mouseout", mouseOut(sent[i]));
    console.log(inbox[i].children[0].childNodes[0]);
    sent[i].addEventListener("click", mouseClick("view/Farah"));
}

