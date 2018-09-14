$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
    $('.color').each(function () {
        var activeColor = $(this).attr('id');
        if ($(this).isInViewport()) {
            $('#fixed-' + activeColor).addClass(activeColor + '-active');
        } else {
            $('#fixed-' + activeColor).removeClass(activeColor + '-active');
        }
    });
});

/*
$('.contact').on('.send', function (e) {
    e.preventDefault();
    if ($('.inbox').css('opacity') == '1') {
        $('.inbox').css('opacity', '0');
        $('.confirmation').css('opacity', '1').delay(7000).queue(function () {
            $(this).css('opacity', '0');
            $('.inbox').css('bottom', '-650px');
        });
    } else {

    }
})
*/