var app = {};

// Closes responsive menu when a scroll trigger link is clicked
    
app.randomisedLogos = function() {

    var images = ['logoicons_01.svg', 'logoicons_02.svg', 'logoicons_03.svg', 'logoicons_04.svg'];

    //Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
    $('<img style="width:2.5em; style= "fill:green;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.navbar-brand');
    $('<img style="width:2.5em; margin-bottom:10px;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.splash-logo');
    $('<img style="width:1.5em; margin-bottom:10px;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.manifesto-logo');

$('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
};
  

app.fadeEffectHeroImages = function() {

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();


        if (window.matchMedia("(max-width: 732px)").matches) {

            $('.features').css({
                opacity: function() {
                    var elementHeight = $(this).height(),

                        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) - 0.15);

                    //console.log('Element ' + elementHeight, 'Scroll Top' + scrollTop);
                    return opacity;
                }
            });
        } else {
            //$('.hero-triptych').removeClass('is-hidden');
            $('.features').css({
                opacity: function() {
                    var elementHeight = $(this).height(),

                        opacity = ((1 - (elementHeight - scrollTop) / elementHeight) - 2.1);

                    //console.log('Element ' + elementHeight, 'Scroll Top' + scrollTop);
                    return opacity;
                }
            });
        }
    });
  };

/*app.designDots = function() {
    $('.dot1').on('click', function() {
        console.log('success');
   });           
  };

 $('.dot2').on('click', function() {
        console.log('success2');
   });    

$('.dot3').on('click', function() {
        console.log('success3');
   });    */       

app.designSlider = function() {

    $('#passionforDesign').click(function() {
        $('#designGalleryStart').addClass('is-hidden');
        $('#designFeatureOne').removeClass('is-hidden').fadeIn('slow');
        $('#passionforDesign').removeClass('is-hidden').fadeOut('slow');

    });


           

    function designSimpleSlider(element = '#dx-slider', auto = false, pause) {

        // Get parent element
        var $this = $(element);

        // Slides container
        var slidesCont = $('.slides-container');
        var slidesDotsCont = $('.slides-dot-container');

        var arrowsCont = $('.arrows');
      
        var slides = slidesCont.children('.slide');
        var slidesDots = slidesDotsCont.children('#sliderDot');
       
      
        var prevSlide = arrowsCont.children('.sliderPrev');
        var nextSlide = arrowsCont.children('.sliderNext');

        // Total slides count
        var slidesCount = slides.length;
        console.log(slidesCount);

        // Set currentSlide to first child
        var currentSlide = slides.first();
        var currentDot = slidesDots.first();

        var currentSlideNext = slides.next();
      
        
        var currentSlideIndex = 1;
        //var sliderDots = slides.first();




        // Hide all slides except first and add active class to first
        //slides.not(':first').css('display', 'none');
        //currentSlide.addClass('active');

        // Function responsible for fading to next slide



        function fadeNext() {
            currentSlide.removeClass('active').fadeOut(700);
            ////currentText.removeClass('active');
            currentDot.removeClass('dot-active');
            prevSlide.addClass('active').fadeIn(700);

            if (currentSlideIndex === slidesCount) {
                currentSlide = slides.first();
                currentDot = slidesDots.first();
                currentSlideIndex = 1;
                
                currentSlide.delay(500).addClass('active').fadeIn(700); 
                currentDot.addClass('dot-active');
                

            } else {
                currentSlideIndex++;
                currentSlide = currentSlide.next();
                currentDot = currentDot.next();

                currentSlide.delay(500).addClass('active').fadeIn(700);
                currentDot.addClass('dot-active');
            }

        }

        // Function responsible for fading to previous slide
        function fadePrev() {
            currentSlide.removeClass('active').fadeOut(700);
            currentDot.removeClass('dot-active');
            

            if (currentSlideIndex === 1) {
                currentSlide = slides.last();
                currentDot = slidesDots.last();
                currentSlide.delay(500).addClass('active').fadeIn();
                currentDot.addClass('active');
                currentSlideIndex = slidesCount;

            } else {
                currentSlideIndex--;
                currentSlide = currentSlide.prev();
                currentDot = currentDot.prev();
                currentSlide.delay(500).addClass('active').fadeIn(700);
                currentDot.addClass('dot-active');
            }
        }
       


        $('.dot1').on('click', function() {
          $('#s2').removeClass('active').fadeOut(700);
          $('#s3').removeClass('active').fadeOut(700);
          $('#s1').delay(500).addClass('active').fadeIn(700);
          slidesDots.removeClass('dot-active');
          $('.dot1').addClass('dot-active');
          });           

        $('.dot2').on('click', function() {
          $('#s1').removeClass('active').fadeOut(700);
          $('#s3').removeClass('active').fadeOut(700);
          $('#s2').delay(500).addClass('active').fadeIn(700);
          slidesDots.removeClass('dot-active');
          $('.dot2').addClass('dot-active');
        });    

        $('.dot3').on('click', function() {
          currentSlide.removeClass('active').fadeOut(700);
          currentSlideNext.addClass('active').fadeIn(700);
          slidesDots.removeClass('dot-active');
          $('.dot3').addClass('dot-active');

         });  

        $('.dot4').on('click', function() {
          currentSlide.removeClass('active').fadeOut(700);
          currentSlideNext.addClass('active').fadeIn(700);
          slidesDots.removeClass('dot-active');
          $('.dot4').addClass('dot-active');

         }); 

        // Detect if user clicked on arrow for next slide and fade next slide if it did
        $(nextSlide).click(function(e) {
            e.preventDefault();
            fadeNext();
           
           

        });

        // Detect if user clicked on arrow for previous slide and fade previous slide if it did
        $(prevSlide).click(function(e) {
            e.preventDefault();
            fadePrev();
            
        });

        


    }

    $(function() {
        designSimpleSlider('#slider');
    });
};




app.navBar = function() {

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

};

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
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

app.scrolltoTop = function() {

    $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.scrollToTop').fadeIn();
    }
    else {
        $('.scrollToTop').fadeOut();
    }

    if ($(this).scrollTop() >= 1750) {
        console.log('hello');
    $('.scroll-up-text').fadeOut();
    }
    else { $('.scroll-up-text').fadeIn();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
};

app.init = function() {
    //app.navBar();
    app.randomisedLogos();
    app.scrolltoTop();
    app.fadeEffectHeroImages();
    //app.designDots();
    app.designSlider();
   
};

$(document).ready(app.init);