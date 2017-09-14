  $(window).scroll(function() {
    if ($(this).scrollTop() > 130){  
        $('.fixed-element, .md-navigation').addClass("sticky");
    }
    else{
        $('.fixed-element, .md-navigation').removeClass("sticky");
    }
  });