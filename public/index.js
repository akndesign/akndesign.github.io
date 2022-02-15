var app = {};

app.liquifyBackground = () => {

const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
const camera = new THREE.PerspectiveCamera(20, canvas.clientWidth / canvas.clientWidth, 1, 1000);
const mouse = new THREE.Vector2(0.2, 0.4);

const dogTexture = new THREE.TextureLoader().load('/img/gradient-3.jpg');

var quad = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertex-shader').textContent,
    fragmentShader: document.getElementById('fragment-shader').textContent,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      dog: {
        type: "t",
        value: dogTexture
      },
      delta: {
        value: 1.0
      },
      mouse: {
        value: mouse
      },
      filter: {
        value: true
      },
      speed: {
        value: 1
      }
    }
  })
);
scene.add(quad);

function onResize () {
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, true);
}

function onMouseMove(e) {
  const x = (e.clientX / (window.innerWidth * 0.5)) - 1;
  const y = -1 * (e.clientY / (window.innerHeight * 0.5)) + 1;
  updateMouse(x, y);
}
function onTouchMove(e) {
  const x = (e.touches[0].clientX / (window.innerWidth * 0.5)) - 1;
  const y = -1 * (e.touches[0].clientY / (window.innerHeight * 0.5)) + 1;
  updateMouse(x, y);
}
function updateMouse(x, y) {
  TweenMax.to(mouse, 2, {
    x: x, 
    y: y,
    onUpdate: function () {
      quad.material.uniforms.mouse.value = mouse;
    }
  })
}

function render(a) {
  requestAnimationFrame(render);
  quad.material.uniforms.delta.value = a;
  quad.material.uniforms.filter.value = 10;
  renderer.render(scene, camera);
}

onResize();
window.addEventListener('resize', onResize);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('touchmove', onTouchMove);
//document.querySelector('#filter').addEventListener('change', function () {

quad.material.uniforms.speed.value = 10 / 100;
requestAnimationFrame(render);


};

app.createBlotterLiquify = () => {

console.log('helloooooo');

document.fonts.ready.then(function () {

const body = document.body;
const docEl = document.documentElement;

const MathUtils = {
    lineEq: (y2, y1, x2, x1, currentVal) => {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
        return m * currentVal + b;
    },
    lerp: (a, b, n) =>  (1 - n) * a + n * b,
    distance: (x1, x2, y1, y2) => {
        var a = x1 - x2;
        var b = y1 - y2;
        return Math.hypot(a,b);
    }
};

    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY)  {
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return {x: posx, y: posy};
    }

    let mousePos = {x: winsize.width/2, y: winsize.height/2};
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));   

    const elem = document.getElementById('content__text').innerHTML;
    const textEl = document.getElementById('content__text-inner').innerHTML;

    const styleProperties = {
        family: "'Recoleta-Semibold', serif",
        weight: 600,
        size : 64,
        paddingLeft: 100,
        paddingRight: 50,
        fill : '#003837'
    }; 

    var text1 = new Blotter.Text('most compelling & and design-led game.', styleProperties);
    //var text2 = new Blotter.Text(textEl, styleProperties);
    //var text3 = new Blotter.Text('game.', styleProperties);
    
    const material = new Blotter.LiquidDistortMaterial();
        material.uniforms.uSpeed.value = 1;
        material.uniforms.uVolatility.value = 0;
        material.uniforms.uSeed.value = 0.1;

    const blotter = new Blotter(material, {
        texts : [text1]
    });
    
    const scope1 = blotter.forText(text1);
    //const scope2 = blotter.forText(text2);
   //const scope3 = blotter.forText(text3);

    
    scope1.appendTo(document.getElementById("content__text-liquid"));
    //scope2.appendTo(document.getElementById("content__text-liquid"));
    //scope3.appendTo(document.getElementById("content__text-liquid"));

   //$( "#content__text-inner" ).remove();
   //$( "#content__text" ).remove();


   let lastMousePosition = {x: winsize.width/2, y: winsize.height/2};
    let volatility = 0.05;

    const render = () => {
    const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
    const relmousepos = {x : mousePos.x - docScrolls.left, y : mousePos.y - docScrolls.top };
    const mouseDistance = MathUtils.distance(lastMousePosition.x, relmousepos.x, lastMousePosition.y, relmousepos.y);
        
    volatility = MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(0.9, 0, 100, 0, mouseDistance),0.9), 0.05);
    material.uniforms.uVolatility.value = volatility;
    lastMousePosition = {x: relmousepos.x, y: relmousepos.y};
    requestAnimationFrame(render);

    }

    requestAnimationFrame(render);
}.bind(this));
};

app.createBlotterRollingDistort = () => {

const text = new Blotter.Text("game.", {
  family : "'Recoleta-Semibold;', serif",
  size : 120,
  weight : 600,
  needsUpdate: true,
  leading: "1",
  fill : '#f3f0df',
  padding: 0 
});

const material = new Blotter.RollingDistortMaterial();

material.uniforms.uSpeed.value = 0.05;
material.uniforms.uSineDistortSpread.value = 0.035;
material.uniforms.uSineDistortCycleCount.value = 2;
material.uniforms.uSineDistortAmplitude.value = 0.03;
material.uniforms.uNoiseDistortVolatility.value = 15;
material.uniforms.uNoiseDistortAmplitude.value = 0.01;
material.uniforms.uRotation.value = 170;
material.uniforms.uSpeed.value = 0.08;
                                                  
const blotter = new Blotter(material, {
  texts : text
});

const elem = document.getElementById("distortion-text");
const scope = blotter.forText(text);

scope.appendTo(elem);

};


app.loaderFadeOut = function(){

var timedifference = new Date().getTimezoneOffset();

var userTime = new Date().getHours();
var userYear = new Date().getFullYear();

$('.year').append(userYear);

console.log(userTime);

(function loaderGreeting () {

if (userTime >= 1 && userTime < 5 ) {
    $('.loader-greeting').text('HELLO NIGHT OWL');

} else if (userTime >= 5 && userTime < 12) {
    $('.loader-greeting').text('GOOD MORNING');

} else if (userTime >= 12 && userTime < 17) {
    $('.loader-greeting').text('AFTERNOON');

} else if (userTime >= 17 || userTime < 1) {
    $('.loader-greeting').text('GOOD EVENING!');
            
}
    setTimeout(loaderGreeting, 5000);
    
})();

}

app.randomisedLogos = function() {

    var images = ['logoicons_01.svg', 'logoicons_02.svg', 'logoicons_03.svg', 'logoicons_04.svg'];

    //Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
    $('<img style="width:2.5em; margin-bottom:10px;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.loader-brand');
    $('<img style="width:2.5em; style= "fill:green;" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.navbar-brand');
}

// Closes responsive menu when a scroll trigger link is clicked
app.mobileNav = function() {

    $('#OpenNav').click(function() {
        $('#mainNav').addClass( "menu-opened" );
        $('.site-header').addClass( "header-opened");
        $('#OpenNav').fadeOut('slow', function(){
            $('#CloseNav').fadeIn('slow');
        });
    });

    $( '#CloseNav' ).click(function() {
        $('#mainNav').removeClass( 'menu-opened');
        $('.site-header').removeClass( "header-opened");
        $('#CloseNav').fadeOut('slow', function(){
            $('#OpenNav').fadeIn('slow');
        });
        
    });

}





app.inviteBox = function() {

// When the user clicks on the button, open the modal
$(".invite-button").on('click', function(c) {
  $("#myModal").removeClass('is-hidden');
});

// When the user clicks on <span> (x), close the modal
 $('.close').on('click', function(c){
        $(this).closest('#myModal').addClass('is-hidden');
});
// When the user clicks anywhere outside of the modal, close it

modal = document.getElementById("myModal");

window.onclick = function(event) {
  if (event.target == modal) {
    $("#myModal").addClass('is-hidden');
  }
}
}

app.smoothScrolling = function() {

}

app.burgerIcon = function() {

    $('#OpenNav').change(function(e) {
        if (this.checked) {    
        $('#tempFahrenheit').fadeOut('slow', function(){
            $('#temperature').fadeIn('slow');
        });
    } else { 
        $('#temperature').fadeOut('slow', function(){
        $('#tempFahrenheit').fadeIn('slow');
                });
        }
    });



}

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
    app.liquifyBackground();
  
    app.randomisedLogos();
    app.smoothScrolling();
    app.loaderFadeOut();
    //app.createBlotterLiquify();
    //app.createBlotterRollingDistort();
    app.inviteBox();
    //app.navBar();
    app.mobileNav();
    app.scrolltoTop();
    app.fadeEffectHeroImages();
    //app.designDots();
    app.designSlider();

    
};

$(document).ready(app.init);