import './styles/index.scss';
// import './component.js';
import $ from 'jquery';
import "slick-carousel";
import "slick-carousel/slick/slick.css";
// require("slick-carousel/slick/slick-theme.css");

$(function () {
	$('.speakers-slider').slick({
		//   lazyLoad: progressive,
		slidesToShow: 3,
		lazyLoad: 'progressive',
		infinite: false,
		// slidesToScroll: 0.68,
		prevArrow: `
	  <button type="button" class="arrow custom-prev">
	  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/>
		<path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
	</svg>
	</button>`,
		nextArrow: `<button type="button" class="arrow custom-next">
		 <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 1L15.2415 7.04944L9 13.0989" stroke="white" stroke-width="1.5"/>
		<path d="M0 7.25H14.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
	</svg></button>`,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	$('.participation-form').submit(function (e) {
		e.preventDefault();
		const name = $('#name').val();
		const email = $('#email').val();
		// const phone = $('#phone').val();

		$(".error").remove();

		if (name.length < 1) {
			$('#name').after('<span class="error">This field is required</span>');
		}
		if (email.length < 1) {
			$('#email').after('<span class="error">This field is required</span>');
		} else {
			var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
			var validEmail = regEx.test(email);
			if (!validEmail) {
				$('#email').after('<span class="error">Enter a valid email</span>');
			}
		}
	});
});