// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");
var title = document.getElementById("title-sticky");
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");
var logo = document.getElementById("logo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    title.classList.add("sticky-title");
    title.classList.remove("no-sticky-title");
    logo.classList.add("sticky-logo");
    logo.classList.remove("no-sticky-logo");
  } else {
    title.classList.add("no-sticky-title");
    title.classList.remove("sticky-title");
    logo.classList.add("no-sticky-logo");
    logo.classList.remove("sticky-logo");
  }
}

function show24() {
  img1.classList.add("visible");
  img1.classList.remove("invisible");
  img2.classList.add("invisible");
  img2.classList.remove("visible");
  img3.classList.add("invisible");
  img3.classList.remove("visible");
}

function show48() {
  img1.classList.add("invisible");
  img1.classList.remove("visible");
  img2.classList.add("visible");
  img2.classList.remove("invisible");
  img3.classList.add("invisible");
  img3.classList.remove("visible");
}

function show72() {
  img1.classList.add("invisible");
  img1.classList.remove("visible");
  img2.classList.add("invisible");
  img2.classList.remove("visible");
  img3.classList.add("visible");
  img3.classList.remove("invisible");
}