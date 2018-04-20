
/*add functionality for changing name for user*/

function mouseClick(link) {
    /*
    var editFirstName = document.getElementById("firstName").valueOf();

    var currName = document.getElementsByClassName("userName");
    var currNamePTag = currName.getElementsByTagName("p")[0];
    if (editFirstName != null && editLastName != null) {
        currNamePTag.innerHTML = editFirstName;
    } else {
        currNamePTag.innerHTML = "uh oh!"
    }*/

    return function() {
        window.location.href = link;
    }
}

/* getElementsByClassName returns a list of all elements withing the class sidebar
*  els[i] is the i'th element in that list (the i'th element in class submitAccountChanges
*  children returns a list of all the elements of children*/
var els = document.getElementsByClassName("submitAccountChanges")[0].children;
for (var i = 0 ; i < els.length; i++) {
    els[i].addEventListener("click", mouseClick("account"));
}