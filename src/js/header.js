// Header JS goes in this.

$(document).on('click', [
  '.btn-navbar-toggle',
  '.country-dropdown-toggle',
  '.navbar-search-toggle',
].join(), function toggleNavDropdown(evt) {
  evt.preventDefault();
  evt.stopPropagation();

  var $button = $(this);
  var target = $button.data('target');
  if (!target) {
    throw new Error('Missing `data-target` attribute: specify the container to be toggled');
  }
  var toggleClass = $button.data('toggle');
  if (!toggleClass) {
    throw new Error('Missing `data-toggle` attribute: specify the class to toggle');
  }

  // Toggle visibility of the target specified via data-target.
  $(target).toggleClass(toggleClass);
  // Toggle aria-expanded attribute.
  $button.attr('aria-expanded', function(i, attr) {
    return attr === 'false' ? 'true' : 'false';
  });
});

/**
 * Close a menu if the user clicks elsewhere.
 *
 * TODO: Is this desireable behavior?
 */
$(document).on('click', function closeInactiveMenus(evt) {
  var clickedElement = evt.target;
  $('.btn-navbar-toggle[aria-expanded="true"]').each(function(i, button) {
    var $button = $(button);
    var buttonTarget = $($button.data('target')).get( 0 );
    if (buttonTarget && ! $.contains(buttonTarget, clickedElement)) {
      // Spoof a click on the open menu's toggle to close that menu.
      $button.trigger('click');
    }
  });
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
