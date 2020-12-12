// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbarr");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function myNavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav exo navbarr sticky") {
    x.className += " navresponsive";
  } 
  else {
    x.className = "topnav exo navbarr sticky";
  }
}