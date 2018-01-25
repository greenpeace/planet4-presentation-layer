$(function() {
  // Force the Cover card to follow scroll
  var $sidebar = $("#action-card");
  var $window = $(window);
  var offset = $sidebar.offset();
  var topPadding = 100;

  if ($sidebar.length > 0) {
    var absPosition = $('.post-details > p:last-child').offset().top - $sidebar.outerHeight() - topPadding;

    $window.scroll(function () {
      if ($window.scrollTop() > offset.top &&
          $window.scrollTop() < absPosition &&
          $sidebar.css('float') != 'none') {
        $sidebar.stop().animate({
          marginTop: $window.scrollTop() - offset.top + topPadding
        });
      }
      if ($window.scrollTop() < offset.top) {
        $sidebar.stop().animate({
          marginTop: 0
        });
      }
    });
  }
});
