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
   
    opacity = ((1 - (elementHeight - scrollTop) / elementHeight) - 2.55);

    console.log('Element ' + elementHeight, 'Scroll Top' + scrollTop);
    return opacity;
  }
});



}


 
 
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
