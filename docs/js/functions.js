
//jQuery for page scrolling element - requires jQuery Easing plugin
$(document).ready(function () {
    $(function () {
        $('a.nav-link').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -110
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});
