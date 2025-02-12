window.onscroll = function(){
    stickyNavbar();
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}


//timeline
(function() {
    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();



//navbar active
const currentPage = window.location.href;

// Get the navigation links
const homeLink = document.getElementById("home-link");
const favoriteLink = document.getElementById("favorite-link");
const pastProjectLink = document.getElementById("pastProject-link");
const progLanguageLink = document.getElementById("progLanguage-link");
const knowledgeLink = document.getElementById("knowledge-link");
const calculatorLink = document.getElementById("calculator-link");
const moreLink = document.getElementById("more-link");

// Define a function to apply the active class to a link
function setActive(link) {
    link.classList.add("active");
}

// Check the current page URL and set the active link
if (currentPage.includes("timeline.html")) {
    setActive(homeLink);
} else if (currentPage.includes("favorite.html")) {
    setActive(favoriteLink);
} else if (currentPage.includes("pastProject.html")) {
  setActive(pastProjectLink);
} else if (currentPage.includes("progLanguage.html")) {
  setActive(progLanguageLink);
} else if (currentPage.includes("knowledge.html")) {
  setActive(knowledgeLink);
} else if (currentPage.includes("calculator.html")) {
  setActive(calculatorLink);
} else {
    setActive(moreLink);
}