(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
		const startDate = new Date('2012-06-12T15:00:00'); // Exact teaching start time
	  
		function updateCounter() {
		  const now = new Date();
		  let diff = Math.floor((now - startDate) / 1000); // total seconds difference
	  
		  const sec = diff % 60;
		  const min = Math.floor(diff / 60) % 60;
		  const hrs = Math.floor((diff % 86400) / 3600); // FIXED here
		  const days = Math.floor(diff / 86400);
	  
		  document.querySelector(".seconds > .value").innerText = String(sec).padStart(2, '0');
		  document.querySelector(".minutes > .value").innerText = String(min).padStart(2, '0');
		  document.querySelector(".hours > .value").innerText = String(hrs).padStart(2, '0');
		  document.querySelector(".days > .value").innerText = String(days).padStart(2, '0');
		}
	  
		updateCounter(); // Initial call
		setInterval(updateCounter, 1000); // Update every second
	  })();
	  
	  
	  

})(jQuery);