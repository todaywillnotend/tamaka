$(document).ready(() => {
	$('.category-buttons__burger').click(() => {
		$('.drawer').removeClass('hidden-left');

		setTimeout(() => {
			$('.drawer__void').removeClass('hidden');
		}, 200);
	})

	$('.drawer__void').click(() => {
		$('.drawer').addClass('hidden-left');
		$('.drawer__void').addClass('hidden');
	})
});