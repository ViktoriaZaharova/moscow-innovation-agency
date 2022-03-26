$(document).scroll(function () {
    if ($(this).scrollTop() <= ($(".home").offset().top - $(window).height())) {
        $('.fixed-block-wrapper').css('opacity', 0);
    } else {
        $('.fixed-block-wrapper').css('opacity', 1);
    }
});