import { getSvg, dropdownToggle, Tab } from './utils';

document.addEventListener('DOMContentLoaded', () => {
	getSvg();
	dropdownToggle();

	if (document.querySelectorAll('.page-banner-1 .swiper-slide').length > 1) {
		const bannerSlider = new Swiper('.page-banner-1 .swiper-container', {
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			autoplay: {
				disableOnInteraction: false,
				delay: 4000,
			},
			pagination: {
				el: '.page-banner-1 .swiper-pagination-custom',
				clickable: true,
				type: 'bullets',
				dynamicMainBullets: true,
			},
		});
	}

	const footerHelpSlider = new Swiper('.footer__help .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.footer__help .swiper-pagination-custom',
			clickable: true,
			type: 'bullets',
			dynamicMainBullets: true,
		},
		breakpoints: {
			1025: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
		},
	});

	const index2Slider = new Swiper('.indexSection--2 .swiper-container', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		pagination: {
			el: '.indexSection--2 .swiper-container .swiper-pagination-custom',
			clickable: true,
			type: 'bullets',
			dynamicMainBullets: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2.1,
			},
			768: {
				slidesPerView: 3.1,
				spaceBetween: 15,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});

	const productCategoriesSlider = new Swiper(
		'.productCategories__slider .swiper-container',
		{
			slidesPerView: 2,
			loop: true,
			observeParents: true,
			observer: true,
			spaceBetween: 10,
			navigation: {
				prevEl: '.productCategories__slider .swiper-prev--custom',
				nextEl: '.productCategories__slider .swiper-next--custom',
			},
			pagination: {
				el: '.productCategories__slider .swiper-pagination-custom',
				clickable: true,
				type: 'bullets',
				dynamicMainBullets: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		},
	);

	const solution6Slider = new Swiper(
		'.solution-1--6__slider .swiper-container',
		{
			slidesPerView: 2,
			spaceBetween: 20,
			navigation: {
				prevEl: '.solution-1--6__slider .swiper-prev--custom',
				nextEl: '.solution-1--6__slider .swiper-next--custom',
			},
			pagination: {
				el: '.solution-1--6__slider .swiper-pagination-custom',
				clickable: true,
				type: 'bullets',
				dynamicMainBullets: true,
			},
			breakpoints: {
				576: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 5,
				},
			},
		},
	);

	const solution3_2Slider = new Swiper(
		'.solution-3--2__slider .swiper-container',
		{
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				prevEl: '.solution-3--2__slider .swiper-prev--custom',
				nextEl: '.solution-3--2__slider .swiper-next--custom',
			},
			pagination: {
				el: '.solution-3--2__slider .swiper-pagination-custom',
				clickable: true,
				type: 'bullets',
				dynamicMainBullets: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
			},
		},
	);

	const contactTab = new Tab('.tab-container');

	if (document.querySelector('.date-picker')) {
		const datepicker = new Litepicker({
			element: document.querySelector('.date-picker'),
			format: 'DD/MM/YYYY',
			startDate: new Date().getTime(),
		});
	}
	// Toggle Filter in Product page
	$('.productList__filterIcon').on('click', function () {
		$('.productList__filter').addClass('is-expanded');
	});
	$('.productList__filterClose').on('click', function () {
		$('.productList__filter').removeClass('is-expanded');
	});
});
