// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay]);

import { Fancybox, Carousel } from '@fancyapps/ui'

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
	//Modal
	$('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });
	$(document).on( "mouseup", function(e) {
		var block = $('#consultation');
		if (!block.is(e.target) && block.has(e.target).length === 0) {
			$('.overlay, #consultation').fadeOut('slow');
		}
	}).on( "keyup", function(e) {
		if (e.key == "Escape") {
			$('.overlay, #consultation').fadeOut('slow');
		}
	});

    $('#consultation form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите {0} символа!")
			  },
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
			  required: "Пожалуйста, введите свою почту",
			  email: "Неправильно введен адрес почты"
			}
		}
	});
	
    $('.phone-number').mask("+7 (999) 999-99-99");

	$(".top").on('click', function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, "500", "swing")
    });
    $(window).on('scroll', function() {
        $(this).scrollTop() > $(window).height() ? $(".top").addClass("active") : $(".top").removeClass("active")
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
	$(document).on('click', 'ul.switcher-tab li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.switcher-wrap').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
	$(document).on("click", "div.switcher-wrap div.switcher-title:not(.active)", function() {
		var block = $(this).parent("div.switcher-wrap");
		if (!block.hasClass("active")) {
			$("div.switcher-content", block).slideDown(200, function() {
				block.addClass("active")
			})
		} else {
			$("div.switcher-content", block).slideUp(200, function() {
				block.removeClass("active")
			})
		}
	});
	const swiperCustomer = new Swiper(".myCustomers", {
		slidesPerView: 6,
        spaceBetween: 5,
		loop: true,
		loopFillGroupWithBlank: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			992: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			1200: {
				slidesPerView: 6,
			},
		},
    });
	const swiperItem = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			  slidesPerGroup: 1,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			  slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 3,
			},
		},
    });
  // Customize Fancybox
  	Fancybox.bind('[data-fancybox="gallery"]', {
		Thumbs: false,
		Toolbar: false,
		closeButton: "top",
	});
})
