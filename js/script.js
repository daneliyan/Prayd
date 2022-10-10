$(document).ready(function () {
  $('.reshenia-slider').slick({
    slidesToShow: 1,
    arrows: false,
  });
});

$('.reshenia-slider-prev').on('click', function () {
  $('.reshenia-slider').slick('slickPrev');
});
$('.reshenia-slider-next').on('click', function () {
  $('.reshenia-slider').slick('slickNext');
});