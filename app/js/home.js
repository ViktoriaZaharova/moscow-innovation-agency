$(function () {
    var topPos = $('.fixed-block').offset().top;
    $(window).scroll(function () {
        var top = $(document).scrollTop(),
            pip = $('footer').offset().top,
            height = $('.fixed-block').outerHeight();
        if (top > topPos && top < pip - height) {
            $('.fixed-block').addClass('fixed').removeAttr("style");
        } else if (top > pip - height) {
            $('.fixed-block').addClass('fixed').removeAttr("style");
        } else {
            $('.fixed-block').removeClass('fixed');
        }
    });
});