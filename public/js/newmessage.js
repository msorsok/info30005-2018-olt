/* a listener when user clicks the complete message button*/
var completeMessage = document.getElementById("completeMessage");
completeMessage.addEventListener("click", processCompleteMessage);

function processCompleteMessage(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    window.location.href = "userinbox";
    return false;
}

/*a listener for when the user lists their intended recipients*/
var messageRecipients = document.getElementById("messageRecipients");
messageRecipients.addEventListener("submit", processMessageRecipients);
var input = [];
function processMessageRecipients(e) {
    if (e.preventDefault()) {
        e.preventDefault();
    }
    var recipients = document.getElementById("recipients").value;
    input.push(recipients);
    createRecipient(recipients);
    listRecipients();

}


function listRecipients() {
    for(var i=0;i<input.length;i++) {
        console.log(i +". "+input[i]);
    }
}

/* simulate responsivity by creating a drop-down list of user input
* for their intended recipients
 */
function createRecipient(name) {
    var newOption = document.createElement("option");
    newOption.value= name;
    newOption.innerHTML = name;
    document.getElementsByName("inputRecipients")[0].appendChild(newOption);
}

