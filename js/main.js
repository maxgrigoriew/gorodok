$(function () {
  $('.parthers-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    // centerMode: true,
    appendArrows: $('.parthers-slider__arrow'),
    // focusOnSelect: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
    },

    ]
  });
  $('.top-slider__wrapper').slick({
    dots: true,
    arrows: false,

  });

  $('.reviews__wrapper').slick({
    dots: true,
    slidesToShow: 3,
    infinite:false,
    // centerMode:true,
    appendArrows: $('.parthers-slider__arrow'),

  });
  $('.header-btn').on('click', function () {
    $('.header-btn').toggleClass('active');
    $('.mob-menu').toggleClass('mob-menu--active');
    $('body').toggleClass('lock');
  });

  // $('.dropdown').on('click', function () {
  //   $('.dropdown-content').toggleClass('dropdown-active');
  // });

  $(".dropdown").click(function() {
    $('.dropdown-content').toggle();
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest(".dropdown").length) {
      $('.dropdown-content').hide();
    }
    e.stopPropagation();
  });
// tabs
$('.catalog-item').on('click', function(e){
    e.preventDefault();
    $('.catalog-item').removeClass('catalog-item--active');
    $('.catalog-items').addClass('catalog-item--active');
    $('.tabs-content').removeClass('tabs-content--active');
    $(this).addClass('catalog-item--active');
    $($(this).attr('href')).addClass('tabs-content--active');
});
// slider
$('.content_toggle').click(function(){
    $('.content_toggle').toggleClass('rotate');
    $('.content_block').toggleClass('hide');
    if ($('.content_block').hasClass('hide')) {
        $(this).html('Подробнее');
    } else {
        $(this).html('Скрыть');
    }
    return false;
});
// timer
// $(function(){
//     $('.counter').hover( function(){
//         $(this).addClass('counter1');
//
//     });
//
// $('.counter1 ').each(function (){
//       $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//       }, {
//         duration:1000,
//         easing: "swing",
//         step:function(now){
//           $(this).text(Math.ceil(now));
//         }
//       });
//     });
// });

});
