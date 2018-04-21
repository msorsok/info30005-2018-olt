
var completeMessage = document.getElementById("completeMessage");

completeMessage.addEventListener("click", processCompleteMessage);

function processCompleteMessage(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    window.location.href = "userinbox";
    return false;
}
