(function($) {
  "use strict"; // Start of use strict


// stop playing the youtube video when I close the modal
/*$('#myModal').on('hide.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});*/


var vidUrl = "https://player.vimeo.com/video/224464481?&title=0&byline=0&portrait=0badge=0";

    //Basically stops and starts the video on modal open/close
    $('#myModal').on('hidden.bs.modal', function (e) {
      console.log('working too');
        $("#PlayerID iframe").attr('src','');
    });

    $('#myModal').on('show.bs.modal', function (e) {
            console.log('working');
      $(this).find('iframe').attr('src', vidUrl);
      /*
        $("PlayerID iframe").attr('src =', vidUrl);*/
    });
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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
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
