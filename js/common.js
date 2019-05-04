$(document).ready(function() {

    $('#baseGnb .depth1-li .depth2-ul').css('opacity' , '0');
    $('#baseGnb .depth1-li').mouseover(function(){
        $(this).addClass('active');
        $(this).find('.depth2-ul').stop().animate({
            opacity: '100'
        }, 500);
    });
    $('#baseGnb .depth1-li').mouseleave(function(){
        $(this).removeClass('active');
        $(this).find('.depth2-ul').stop().animate({
            opacity: '0'
        }, 300);
    });


    $('.base-slider').bxSlider({
        controls: false,
        auto: true
    });


});
