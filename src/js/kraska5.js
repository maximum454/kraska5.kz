//= partials/jquery.min.js
//= partials/bootstrap.js
//= partials/slick.min.js
//= partials/jquery.fancybox.js

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#menu-fix').addClass("fix");
            $('.contact-us').addClass("top");
        } else {
            $('#menu-fix').removeClass("fix");
            $('.contact-us').removeClass("top");
        }
    });


    $('.js-now').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-partners').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-certificates').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

