$('.category-buttons__burger').click(() => {
  $('.drawer').removeClass('hidden-left');

  setTimeout(() => {
    $('.drawer__void').removeClass('hidden');
  }, 200);
});

$('.drawer__void').click(() => {
  $('.drawer').addClass('hidden-left');
  $('.drawer__void').addClass('hidden');
});

$('.search-icon').click(() => {
  // alert('hello');
  if ($('.search input').css('display') == 'none') {
    $('.popup-search').removeClass('hidden-top');
  }
  // alert($('.search input').css('display'));
});

$('.popup-search__button-close').click(() => {
  $('.popup-search').addClass('hidden-top');
});
