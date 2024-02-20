'use strict'

// 在這裡使用 jQuery 進網頁
$(document).ready(function() {
  // 顯示歡迎畫面 with fadeIn 動畫
  $('#welcomeScreen').fadeIn(1000); // 1秒的動畫時間

  // 隱藏歡迎畫面並顯示主要內容 with fadeOut 動畫
  var displayTime = 2000;
  setTimeout(function() {
      $('#welcomeScreen').fadeOut(1000, function() {
          // 動畫完成後顯示主要內容
          $('#mainContent').fadeIn(1000);
          $('footer').fadeIn(1000);
        //   $('.twitter-hashtag-button twitter-hashtag-button-rendered twitter-tweet-button').fadeIn(2000);
        //   $('#xbutton').fadeIn(2000);


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
  var thisYear = new Date().getFullYear() ;
  Tick.count.down(thisYear + '-07-26').onupdate = function (value) {
  tick.value = value;
};
};


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
    