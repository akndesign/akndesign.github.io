(function($) {
  "use strict"; // Start of use strict


// stop playing the youtube video when I close the modal
/*$('#myModal').on('hide.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});

var vidUrl = "https://player.vimeo.com/video/224464481?&title=0&byline=0&portrait=0badge=0";

    function embedVideo(video) {
  var div = document.getElementById('vimeo');
  div.innerHTML = unescape(video.html);

  var ifr = div.firstChild;
  ifr.addEventListener('load', function(e) {
    var player = $f(ifr);
    player.api('setVolume', 0);
  });
}

function init() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', url);
  document.getElementsByTagName('head').item(0).appendChild(js);
}

    //Basically stops and starts the video on modal open/close
    $('#myModal').on('hidden.bs.modal', function (e) {
      console.log('working too');
        $("#PlayerID iframe").attr('src','');
    });

    $('#myModal').on('show.bs.modal', function (e) {
            console.log('working');
      $(this).find('iframe').attr('src', vidUrl);
      /*
        $("PlayerID iframe").attr('src =', vidUrl);
    });*/
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

 var images = ['logoicons_01.svg', 'logoicons_02.svg', 'logoicons_03.svg', 'logoicons_04.svg'];
    
//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
    $('<img style="width:2.5em;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.navbar-brand');
    $('<img style="width:2.5em; margin-bottom:10px;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.splash-logo');
    $('<img style="width:1.5em; margin-bottom:10px;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.manifesto-logo');


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();


if (window.matchMedia("(max-width: 732px)").matches) { 

  $('.features').css({
  opacity: function() {
    var elementHeight = $(this).height(),
   
    opacity = ((1 - (elementHeight - scrollTop) / elementHeight)-0.15);

    console.log('Element ' + elementHeight, 'Scroll Top' + scrollTop);
    return opacity;
  }
});
}
else
{ 
  $('.features').css({
  opacity: function() {
    var elementHeight = $(this).height(),
   
    opacity = ((1 - (elementHeight - scrollTop) / elementHeight) - 2.15);

    console.log('Element ' + elementHeight, 'Scroll Top' + scrollTop);
    return opacity;
  }
});

}

$(document).ready(function() {
 function dxSimpleSlider(element = '#dx-slider', auto = false, pause) {

        // Get parent element
        var $this = $(element);

        // Slides container
        var slidesCont = $this.children('.slides-container');
        // Get all slides
        var slides = slidesCont.children('.slide');

        // Get pager div
        var pager = $this.children('.pager');

        // Get Previous / Next links
        var arrowsCont = $this.children('.arrows');
        var prevSlide = arrowsCont.children('.prev');
        var nextSlide = arrowsCont.children('.next');

        // Total slides count
        var slidesCount = slides.length;

        // Set currentSlide to first child
        var currentSlide = slides.first();
        var currentSlideIndex = 1;

        var autoPlay = null;

        // Hide all slides except first and add active class to first
        slides.not(':first').css('display', 'none');
        currentSlide.addClass('active');

        // Function responsible for fading to next slide
        function fadeNext() {
            currentSlide.removeClass('active').fadeOut(700);

            if(currentSlideIndex == slidesCount) {
                currentSlide = slides.first();
                currentSlide.delay(500).addClass('active').fadeIn(700);
                currentSlideIndex = 1;
            } else {
                currentSlideIndex++;
                currentSlide = currentSlide.next();
                currentSlide.delay(500).addClass('active').fadeIn(700);
            }

            pager.text(currentSlideIndex+' / '+slidesCount);
        }

        // Function responsible for fading to previous slide
        function fadePrev() {
            currentSlide.removeClass('active').fadeOut(700);

            if(currentSlideIndex == 1) {
                currentSlide = slides.last();
                currentSlide.delay(500).addClass('active').fadeIn();
                currentSlideIndex = slidesCount;
            } else {
                currentSlideIndex--;
                currentSlide = currentSlide.prev();
                currentSlide.delay(500).addClass('active').fadeIn(700);
            }

            pager.text(currentSlideIndex+' / '+slidesCount);
        }

        // Function that starts the autoplay and resets it in case user navigated (clicked prev or next)
        function AutoPlay() {
            clearInterval(autoPlay);

            if(auto == true)
                autoPlay = setInterval(function() {fadeNext()}, pause);
        }

        // Detect if user clicked on arrow for next slide and fade next slide if it did
        $(nextSlide).click(function(e) {
            e.preventDefault();
            fadeNext();
            AutoPlay();
        });

        // Detect if user clicked on arrow for previous slide and fade previous slide if it did
        $(prevSlide).click(function(e) {
            e.preventDefault();
            fadePrev();
            AutoPlay();
        });

        // Start autoplay if auto is set to true
        AutoPlay();

    }

$(function() {
        dxSimpleSlider('#slider', false, 8000);
    });

  });

    


$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

$('#passionforDesign').click(function() { 
        $('#designGalleryStart').addClass('is-hidden');
        $('#designFeatureOne').removeClass('is-hidden').fadeIn('slow');
        $('#passionforDesign').removeClass('is-hidden').fadeOut('slow');

    }); 
});

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
    
})(jQuery); // End of use strict
