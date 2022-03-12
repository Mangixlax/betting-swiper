const swiper = new Swiper('.swiper', {
	// Optional parameters
	effect: 'cards',
	slideShadows: false,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper__button-next',
		prevEl: '.swiper__button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});