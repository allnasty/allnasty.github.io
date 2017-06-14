$(document).ready(function() {

  $('.show-hidden-menu').mouseenter(function() {
    $('.hidden-menu').show('slow');
  });
  $('.show-hidden-menu').mouseleave(function() {
    $('.hidden-menu').hide();
  });

  $('.only-slider-galery').each (function (){ 
    $(this).slick({
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1800
    });
  });
});









