var Layout = function () {
    'use strict';

    // handle on page scroll
    var handleHeaderOnScroll = function () {
        if ($(window).scrollTop() > 60) {
            $('body').addClass('page-on-scroll');
        } else {
            $('body').removeClass('page-on-scroll');
        }
    }

    // handle carousel
    var handleCarousel = function () {
        var $item = $('.carousel .item');
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight);
        $item.addClass('full-screen');

        $('.carousel img').each(function () {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            $(this).parent().css({
                'background-image': 'url(' + $src + ')',
                'background-color': $color
            });
            $(this).remove();
        });

        $(window).on('resize', function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    return {
        init: function () {
            handleHeaderOnScroll(); // initial setup for fixed header
            handleCarousel(); // initial setup for carousel
            // handleHeight(); // initial setup for group element height

            // handle minimized header on page scroll
            $(window).scroll(function () {
                handleHeaderOnScroll();
            });
        }
    };
}();

$(document).ready(function () {
    Layout.init();
});