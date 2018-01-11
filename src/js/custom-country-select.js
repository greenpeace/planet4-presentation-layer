$('.country-selectbox').click(function(){
  $(this).toggleClass('active');	
  $(this).parent().find('.option-contry').toggleClass('active');
});
