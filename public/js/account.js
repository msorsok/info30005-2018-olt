
function mouseClick(link) {
    return function() {
        window.location.href = link;
    }
}
/*

var nameForm = document.getElementById("editNameForm");
nameForm.addEventListener("submit", processNameForm);
function processNameForm(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if ((firstName == "") || (lastName == "")) {
        alert("Please fill out the first and last name fields");
    } else {
        alert("you set your new name to be: " +firstName + " " + lastName);

        var userName = document.getElementsByClassName("userName")[0];
        userName.getElementsByTagName("p")[0].innerHTML = firstName + " " + lastName;

    }


    mouseClick("account");
    return false;

}

nameForm.addEventListener("keyup", enterPressed);
function enterPressed(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        processNameForm(e);
    }
}



var nomineeForm = document.getElementById("editNominationForm");
nomineeForm.addEventListener("submit", processNominationForm);
function processNominationForm(e) {
    if(e.preventDefault) {
        e.preventDefault();
    }

    var firstNominee = document.getElementById("firstNominee").value;
    var secondNominee = document.getElementById("secondNominee").value;
    if ((firstNominee == "") || (secondNominee = "")) {
        alert("Please specify your first and second nominees");
    } else {
        alert("your new nominees are: " +firstNominee+ " and " + secondNominee);
    }
    mouseClick("account");
    return false
}
*/