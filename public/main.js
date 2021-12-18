var Scrollbar = window.Scrollbar;

var mainElem = $("main-scrollbar"); 

Scrollbar.init(document.querySelector('#my-scrollbar'), options);
Scrollbar.use(OverscrollPlugin);

const options = {
  damping: 0.11,
  renderByPixels: !('ontouchstart' in document),
};
const overscrollOptions = {
  enable: true,
  effect: navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
  damping: 0.11,
  maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
  glowColor: mainElem.dataset.glowColor,
};

const scrollbar = [
  Scrollbar.init(mainElem, {
    ...options,
    delegateTo: document,
    plugins: {
      overscroll: { ...overscrollOptions },
    },
  }),
]


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
