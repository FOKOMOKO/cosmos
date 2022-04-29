$(document).ready(function () {
  $('.photos__box').slick({
    arrows: true, // показать стрелки
    dots: false, // не показывать точки
    slidesToShow: 1, // показывать по 3 слайда
    autoplay: true, // автоматическое проигрывание слайдов
    autoplaySpeed: 1000,
    prevArrow: '<img class="slick-btn slick-prev" src="/images/left.png" alt="">',
    nextArrow: '<img class="slick-btn slick-next" src="/images/right.png" alt="">'
  });
  $('.menu__item').on('click', function () {
$('.header__list').toggleClass('active')
  })
});
