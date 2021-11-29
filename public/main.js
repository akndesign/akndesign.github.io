// Nav toggle
var menuOpen      = document.querySelector('.menu-open-trigger'),
    menuClose     = document.querySelector('.menu-close-trigger'),
    menuContainer = document.querySelector('.site-navigation');

menuOpen.addEventListener("click", function() {
  menuContainer.classList.add('menu-open');
});

menuClose.addEventListener("click", function() {
  menuContainer.classList.remove('menu-open');
});

// Function to add randomised "sticker-" classes to elements
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Footer
var footerElement = document.querySelector('.footer-sticker');
footerElement.classList.add("sticker-" + getRandomInt(2));

// Index
if (document.body.classList.contains('template-index')) {
  var boofa   = document.querySelector('.boofa'),
      sticker = document.querySelector('.sticker');

  boofa.classList.add("boofa-" + getRandomInt(8));
  sticker.classList.add("sticker-" + getRandomInt(4));
}

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
