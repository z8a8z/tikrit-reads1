/*
Author       : theme_ocean 
Template Name: Purdue - Education HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).ready(function($){
	
		/*PRELOADER JS*/
		jQuery(window).on('load',function() {
		  setTimeout(function(){
			$('.preloaders').fadeToggle();
			}, 1500);
		});
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/		
		if (typeof $.fn.simpleMobileMenu === 'function' && $('.mobile_menu').length) {
			$('.mobile_menu').simpleMobileMenu({
				'menuStyle': 'slide'
			});
		}
		$(window).on('scroll', function(){
			if ( $(window).scrollTop() > 70 ) {
				$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
			} else {
				$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
			}
		});	
		/*END MENU JS*/
		
		/*START VIDEO JS*/
		if (typeof $.fn.magnificPopup === 'function') {
			$('.video-play, .co-video-play, .magnific_popup').magnificPopup({
				type: 'iframe'
			});
		}
		if (typeof $.fn.mixItUp === 'function' && $('.product_item').length) {
			$('.product_item').mixItUp();
		}
		/*END VIDEO JS*/	

		/*START PARTNER LOGO*/
		if (typeof $.fn.owlCarousel === 'function' && $('.partner').length) {
			$('.partner').owlCarousel({
			  autoPlay: 3000,
			  items : 4,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,3]
			});
		}
		/*END PARTNER LOGO*/		

		/*START TESTIMONIAL JS*/	
		if (typeof $.fn.owlCarousel === 'function' && $('#testimonial-slider').length) {
			$('#testimonial-slider').owlCarousel({
			    items:3,
				itemsDesktop:[1000,3],
				itemsDesktopSmall:[980,2],
				itemsTablet:[768,2],
				itemsMobile:[650,1],
				pagination:true,
				navigation:true,
				navigationText:['', ''],
				slideSpeed:1000,
				autoPlay:false
			});
		}
		/*END TESTIMONIAL JS*/

		/* START EVENT JS */
		if (typeof $.fn.owlCarousel === 'function' && $('#event-slider').length) {
			$('#event-slider').owlCarousel({
				items:3,
				itemsDesktop:[1199,3],
				itemsDesktopSmall:[979,2],
				itemsTablet:[768,2],
				itemsMobile:[600,1],
				pagination: false,
				navigation:true,
				navigationText:['', ''],
				slideSpeed:1000,
				autoPlay:false
			});
		}
		/* END EVENT JS */	
		
		/*INITIATE PURE COUNTER*/
		if (typeof $.fn.inview === 'function') {
			$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter-num').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 2000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		}

		/*START WOW ANIMATION JS*/
		if (typeof WOW === 'function') {
			new WOW().init();	
		}
		/*END WOW ANIMATION JS*/	
		
		if (typeof Lenis !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
			const lenis = new Lenis();
			lenis.on('scroll', ScrollTrigger.update);
			gsap.ticker.add((time) => {
				lenis.raf(time * 1000);
			});
			gsap.ticker.lagSmoothing(0);
		}
	
	}); 

})(jQuery);
