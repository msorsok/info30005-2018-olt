/* a listener when user clicks the complete message button*/
var completeMessage = document.getElementById("completeMessage");
//completeMessage.addEventListener("click", processCompleteMessage);

function processCompleteMessage(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    window.location.href = "userinbox";
    return false;
}

/*a listener for when the user lists their intended recipients*/
var messageRecipients = document.getElementById("addRecipient");
messageRecipients.addEventListener("click", processMessageRecipients);
var input = [];
function processMessageRecipients() {
    var recipient = document.getElementById("recipients").value;
    document.getElementById("recipients").value = "";
    input.push(recipient);
    addRecipientHTML(recipient);

}


/* simulate responsivity by creating a drop-down list of user input
* for their intended recipients
 */
function addRecipientHTML(name) {
    if (input.length == 1){
        var recipients = document.getElementsByClassName("recipients")[0];
        var pTag = document.createElement("p");
        pTag.id = "recipientsList";
        pTag.innerHTML = name;
        recipients.appendChild(pTag);
    }
    else {
        document.getElementById("recipientsList").innerHTML += ", " + name;
    }
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.style.display = "none";
    newInput.value = name;
    newInput.name = "recipient" + (input.length - 1);
    var form = document.getElementById("newCapsule");
    form.appendChild(newInput);
    console.log(newInput);
}

