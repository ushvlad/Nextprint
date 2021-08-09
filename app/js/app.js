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
	//Modal
	$('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });

    function validateForms(form){
        $(form).validate({
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
    };
	
    validateForms('#consultation form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

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
})
