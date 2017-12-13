// Header JS goes in this.

// Returns width of browser viewport
if($( window ).width() >= 768) {
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 130){
  //       $('.fixed-element, .md-navigation').addClass("sticky");
  //   }
  //   else{
  //       $('.fixed-element, .md-navigation').removeClass("sticky");
  //   }
  // });
};

console.log('hi');
$(document).on('click', '.country-dropdown-toggle', function(evt) {
  evt.preventDefault();
  $('.country-list').toggleClass('open');
});

// Hide Header on on scroll down
if($( window ).width() <= 768) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.top-navigation').outerHeight();
  $(window).scroll(function(event){
      didScroll = true;
  });
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  function hasScrolled() {
      var st = $(this).scrollTop();
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      if (st > lastScrollTop && st > navbarHeight){
          $('.top-navigation').removeClass('nav-down').addClass('nav-up');
      } else {
          if(st + $(window).height() < $(document).height()) {
              $('.top-navigation').removeClass('nav-up').addClass('nav-down');
          }
      }
      lastScrollTop = st;
  }
  var $slider = $('.mobile-menus');
  $(document).click(function() {
    if($('.menu').hasClass('active')){
    //Hide the menus if visible
    $slider.animate({
      left: parseInt($slider.css('left'),10) == 0 ?
       -320 : 0
    });
    $('.menu').removeClass('active');
    }
    if($('.search-box').hasClass('active')){
    //Hide the search if visible
    $searchBox.slideToggle().toggleClass('active');;
    }
  });

  $('.menu').click(function() {
    event.stopPropagation();
    $(this).toggleClass('active');
    $slider.animate({
      left: parseInt($slider.css('left'),10) == -320 ?
       0 : -320
    });
  });

  var $searchBox = $('#search .search-box');
  var $searchTrigger = $('#search-trigger');

  $searchTrigger.on('click', function(e) {
    event.stopPropagation();
      $searchBox.slideToggle().toggleClass('active');
  });
};
