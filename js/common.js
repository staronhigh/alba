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

});