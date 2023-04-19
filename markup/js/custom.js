$(document).ready(function () {


    function createFullpage() {
        $('#fullpage').fullpage({
            anchors: ['home', 'about', 'caseStudies', 'companiesAndBrands', 'contact'],
            onLeave: function (origin, destination, direction, trigger) {
                let leavingSection = this;

                if ((origin.index == 2 && direction == 'down')) {
                    $('.logo svg').css({'stroke': '#fff'})
                }
                if ((origin.index == 4 && direction == 'up')) {
                    $('.logo svg').css({'stroke': '#fff'})
                }
                if ((origin.index == 3)) {
                    $('.logo svg').css({'stroke': '#FC5F02'})
                }
            },
        });
    }

    if ($(window).width() > 834) {
        createFullpage();
    }

    // $('#destroy').click(function () {
    //     $.fn.fullpage.destroy('all');
    // });
    //
    // $('#create').click(function () {
    //     createFullpage();
    // });

    $(window).resize(function() {
        if ($(window).width() <= 834) {
            $.fn.fullpage.destroy('all');
        } else {
            createFullpage();
        }
    });

    //methods
    //$.fn.fullpage.setAllowScrolling(false);

// menu hamburger
    $('.btn-hamb').click(function (e) {
        e.preventDefault();
        $('.nav-wrapper').fadeToggle();
        $('.btn-hamb').toggleClass('close');
    });

    $('.nav-wrapper').click(function (e) {
        $('.btn-hamb').click();
    });

// slick

    $('.s-companies__carousel-brands').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    });

    $('.s-companies__carousel-feedback').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.s-about__carousel-questions').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $(window).on('orientationchange', function() {
        $('.s-companies__carousel-brands').slick('resize');
        $('.s-companies__carousel-feedback').slick('resize');
        $('.s-about__carousel-questions').slick('resize');
    });
});
//
