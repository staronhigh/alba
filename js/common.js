$(document).ready(function () {


    $('#baseGnb .depth1-li .depth2-ul').css({
        opacity: 0,
    });
    $('#baseGnb .depth1-li').mouseover(function () {
        $(this).addClass('active').css('height', 'auto');
        $(this).find('.depth2-ul').stop().animate({
            opacity: '100',
        }, 500)
    });
    $('#baseGnb .depth1-li').mouseleave(function () {
        $(this).removeClass('active').css('height', '42px');
        $(this).find('.depth2-ul').stop().animate({
            opacity: '0'
        }, 300)
    });

    $('#baseGnb .depth2-ul li a').on('click', function () {

        $(this).closest('.depth2-ul').animate({
            opacity: '0'
        }, 10);

        $(this).closest('.depth1-li').animate({
            height: '42px'
        }, 10);



        var menuId = $(this).attr('href');
        var scrollpos = $(menuId).offset().top;
        $('html').animate({
            scrollTop: scrollpos
        }, 500);
    });


    $('.base-slider').bxSlider({
        controls: false,
        auto: true
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 600) {
            $('.btn-top').fadeIn(200);
        } else {
            $('.btn-top').fadeOut(200);
        }
    });

    $(".btn-top button").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 600);

    });


    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.base-header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            // $('.base-header').fadeOut(500);
            $('.base-header').animate({
                top: '-153px'
            }, 200);
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                // $('.base-header').fadeIn(500);
                $('.base-header').animate({
                    top: '0'
                }, 200);
            }
        }
        lastScrollTop = st;
    }




});