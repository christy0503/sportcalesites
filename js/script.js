'use strict'

$(document).ready(function() {
  $('#welcomeScreen').fadeIn(1000);
  var displayTime = 2000;
  setTimeout(function() {
      $('#welcomeScreen').fadeOut(1000, function() {
          $('#mainContent').fadeIn(1000);
          $('#spocale4p').fadeIn(1000);
          $('footer').fadeIn(1000);


      });
  }, displayTime);
});





document.addEventListener("DOMContentLoaded", function () {
  var underlineElements = document.querySelectorAll(".underline-scroll");

  window.addEventListener("scroll", function() {
      var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      underlineElements.forEach(function(element) {
          var rect = element.getBoundingClientRect();
          var elementTop = rect.top + window.scrollY;
          var elementBottom = elementTop + rect.height;

          if (elementTop < window.innerHeight && elementBottom > 0) {
              element.style.setProperty("--scroll-percentage", scrollPercentage + "%");
              element.classList.add("active");
          } else {
              element.classList.remove("active");
          }
      });
    });

    const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 0,
        slidesPerView: "2",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }

    
});
});



function handleTickInit(tick) {
    var thisYear = new Date().getFullYear();
    
    var targetDate = new Date(Date.UTC(thisYear, 6, 26)); 
    
    targetDate.setUTCHours(targetDate.getUTCHours() + 2);
    
    var targetDateString = targetDate.toISOString().split('T')[0];
    
    Tick.count.down(targetDateString).onupdate = function (value) {
      tick.value = value;
    };
  }
  

function fadeAnime(){


	$('.fadeUpTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');
		}else{
		$(this).removeClass('fadeUp');
		}
		});
}

	$(window).scroll(function (){
		fadeAnime();
	});
	$(window).on('load', function(){
		fadeAnime();
	});

    document.getElementById("detail").addEventListener("click", function() {
        window.location.href = "https://spocale.com/show";
    });
    document.getElementById("mailbutton").addEventListener("click", function() {
        window.location.href = "https://corp.spocale.com/contact/";
    });
    document.getElementById("spocalefooterlogo").addEventListener("click", function() {
        window.location.href = "https://corp.spocale.com/";
    });
    