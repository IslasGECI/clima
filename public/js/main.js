// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");
var title = document.getElementById("title-sticky");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    title.classList.add("sticky-title");
    title.classList.remove("no-sticky-title");
  } else {
    title.classList.add("no-sticky-title");
    title.classList.remove("sticky-title");
  }
}