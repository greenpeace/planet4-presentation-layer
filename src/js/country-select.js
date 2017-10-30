$('.country-select-dropdown').click(function(){
  $(this).parent().toggleClass('active-li');
  $('.country-select-box').toggle();
});

$('.country-select-box .country-list li').click(function(){
  $(this).parents('.country-select-box').find('li').removeClass('active');
  $(this).addClass('active');
});
