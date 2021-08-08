// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
// // Import vendor jQuery plugin example (not module)




document.addEventListener('DOMContentLoaded', () => {

	$( '.search' ).on( "click", function() {
		$( '.search-field' ).stop().slideToggle();
		$( '.search-field input[type=text]' ).trigger( "focus" );
	});

	$(document).on( "mouseup", function(e) {
		var block = $('.search-field');
		if (!block.is(e.target) && block.has(e.target).length === 0) {
			block.slideUp();
		}
	}).on( "keyup", function(e) {
		if (e.key == "Escape") {
			$('.search-field').slideUp();
		}
	});

	$('.header__mobile-menu-button').on( "click", function() {
		$('.mobile-menu').stop().slideToggle();
	});

	$(document).on( "mouseup", function(e) {
		var block = $('.mobile-menu');
		if (!block.is(e.target) && block.has(e.target).length === 0) {
			block.slideUp();
		}
	}).on( "keyup", function(e) {
		if (e.key == "Escape") {
			$('.mobile-menu').slideUp();
		}
	});
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:5,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		responsive:{
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 4,
			},
			1200: {
				items: 6
			}
		}
	});
})
