$(function() {
    // Force the Cover card to follow scroll
    var $sidebar   = $("#action-card");
    var $window    = $(window);
    var offset     = $sidebar.offset();
    var topPadding = 100;

    if ($sidebar.size() > 0) {
        $window.scroll(function () {
            if ($window.scrollTop() > offset.top && $sidebar.css('float') != 'none') {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                });
            }
        });
    }
});
