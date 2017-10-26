  $(document).ready(function() {
    $(".step-info-wrap").click(function(){
    if($(this).parent().hasClass('active')){
      $(this).parent().removeClass('active');
      }
    else {
      $('.col').removeClass('active');
      $(this).parent().addClass('active');
      }
  });
});

//   $(document).ready(function() {
//     $(".steps-action").hide();
//     $(".step-info-wrap").click(function(){
//     if($(this).parent().hasClass('active')){
//       $(this).parent().removeClass('active');
//        $(this).find(".steps-action").slideUp();
//        $(".steps-action").slideUp();
//       }
//     else {
//       $('.col-lg-3').removeClass('active');
//       $(this).parent().addClass('active');
//        $(".steps-action").slideUp();
//        $(this).find(".steps-action").slideDown();
//       }
//   });
// });