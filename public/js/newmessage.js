
var completeMessage = document.getElementById("completeMessage");

completeMessage.addEventListener("click", processCompleteMessage);

function processCompleteMessage(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    window.location.href = "userinbox";
    return false;
}


var messageRecipients = document.getElementById("messageRecipients");
messageRecipients.addEventListener("submit", processMessageRecipients);
function processMessageRecipients(e) {
    if (e.preventDefault()) {
        e.preventDefault();
    }
}