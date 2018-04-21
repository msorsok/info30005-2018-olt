function mouseOver(el) {
    return  function() {
        el.style.backgroundColor = "#56327d";
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
        el.style.backgroundColor = "#957ead";
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

var sentMail = document.getElementsByClassName("allSentEmails")[0].children;
for (var i = 0 ; i < sentMail.length; i++) {
    sentMail[i].addEventListener("mouseover", mouseOver(sentMail[i]));
    sentMail[i].addEventListener("mouseout", mouseOut(sentMail[i]));
    sentMail[i].addEventListener("click", mouseClick(sentMail[i].className));

}
