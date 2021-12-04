// Nav toggle
var menuOpen      = document.querySelector('.menu-open-trigger'),
    menuClose     = document.querySelector('.menu-close'),
    menuContainer = document.querySelector('.site-navigation');

menuOpen.addEventListener("click", function() {
  menuContainer.classList.add('menu-open');
});

menuClose.addEventListener("click", function() {
  menuContainer.classList.remove('menu-open');
  console.log(close);
});


// Function to add randomised "sticker-" classes to elements
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Footer
var footerElement = document.querySelector('.footer-sticker');
footerElement.classList.add("sticker-" + getRandomInt(2));

// Index

// Pages
var imageContainer = document.querySelector('.hero-image');
if (imageContainer) {
  imageContainer.classList.add("sticker-" + getRandomInt(5));
}

// Events
// Open first event
var firstEvent = document.querySelector('.event-list .event:first-child');
if (firstEvent) {
  firstEvent.classList.add("open");
}

// Accordion
var accordion    = document.querySelector('.accordion'),
    openTrigger  = document.querySelectorAll('.open-trigger'),
    closeTrigger = document.querySelectorAll('.close-trigger');

if (accordion) {
  for (var i = 0; i < openTrigger.length; i++) {
    openTrigger[i].addEventListener("click", function() {
      var parent = this.parentElement.parentElement;
      parent.classList.add('open');
    });
  }

  for (var i = 0; i < closeTrigger.length; i++) {
    closeTrigger[i].addEventListener("click", function() {
      var parent = this.parentElement.parentElement;
      parent.classList.remove('open');
    });
  }
}
