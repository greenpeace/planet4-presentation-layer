$(function() {
  $('#search-type button').click(function() {
     $('#search-type button').removeClass("active");
    $(this).addClass("active");
    });

  $('.btn-filter').click(function() {
  	$('#filtermodal').modal('show');
    });
});