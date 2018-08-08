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