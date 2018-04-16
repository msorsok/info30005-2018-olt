function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementsByClassName("signup").style.display = "";
    } else {
        document.getElementsByClassName("signup").style.display = 'none';
    }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes