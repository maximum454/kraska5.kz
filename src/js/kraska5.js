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


    $('.popap_box').click(function () {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#000'
                }
            }
        });
    });
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1500);
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

