$(document).ready(() => {
	// Бургер
	$('.category-buttons__burger').click(() => {
		$('.drawer').removeClass('hidden-left');

		setTimeout(() => {
			$('.drawer__void').removeClass('hidden');
		}, 200);
	});

	$('.drawer__void').click(() => {
		$('.drawer').addClass('hidden-left');
		$('.drawer__void').addClass('hidden');
	})

	$('.search-icon').click(() => {
		if ($('.search input').css('display') == 'none') {
			$('.search-popup').removeClass('hidden-top');
		}
	})

	$('.search-popup__button-close').click(() => {
		$('.search-popup').addClass('hidden-top');
	})
});