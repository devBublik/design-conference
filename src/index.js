import './styles/index.scss';
import $ from 'jquery';
import "slick-carousel";
import "slick-carousel/slick/slick.css";

$(function () {
	$('.speakers-slider').slick({
		slidesToShow: 3,
		lazyLoad: 'progressive',
		infinite: false,
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
		responsive: [
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1370,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
		]
	});
	$('.participation-form').submit(function (e) {
		e.preventDefault();
		const name = $('#name').val();
		const email = $('#email').val();
		const phone = $('#phone').val();
		const regexPhone = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
		const regExEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
		const validEmail = regExEmail.test(email);
		const validPhone = regexPhone.test(phone);

		$(".error").remove();

		if (name.length < 1) {
			$('#name').after('<span class="error">Введите имя</span>');
		} if (!validEmail) {
			$('#email').after('<span class="error">Введите корректный e-mail</span>');
		} if (!validPhone) {
			$('#phone').after('<span class="error">Введите корректный телефон</span>');
		}
	});
});