currentIndex = $('.carousel-item.active').find('img').attr('src');

$('#carousel-wrapper').on('slide.bs.carousel', function () {
  currentIndex = $('.carousel-item.active').find('img').attr('src');
  $('a.carousel-control-next').css('background-image', 'url(' + currentIndex + ')');
});

  $('a.carousel-control-next').css('background-image', 'url(' + currentIndex + ')');