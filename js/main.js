$(document).ready(function() {
    $('#license').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: false
    });
    $('#many-users').owlCarousel({
        loop: true,
        items: 2,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        slideBy: 2
    });
    $('#owl-blog').owlCarousel({
        loop: false,
        items: 3,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                center: true,
                loop: true,
                margin: 30
            },
            768: {
                items: 3,
                margin: 30,
                stagePadding: 10
            }
        }
    });

    let minNumber = 1;
    $('.quantity .btn-price:first-of-type').on('click', function() {
        $('.quantity input').val(parseInt($('.quantity input').val(), 10) + 1);
    });

    $('.quantity .btn-price:last-of-type').on('click', function() {
        if ($('.quantity input').val() == minNumber) {
            return false;
        } else {
            $('.quantity input').val(parseInt($('.quantity input').val(), 10) - 1);
        }
    });

    $('.close-menu-mb').click(function() {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
            $('body').removeClass('overflow-hidden');
        }
    });

    $('.nav-mobile').click(function() {
        $('.navbar-nav, .navbar-collapse').addClass('show');
        $('body').addClass('overflow-hidden');
    });

    if ($(window).width() < 767) {
        $('.wow').removeClass('wow')
    }

    new WOW().init();

    $('.navbar-nav li a').on('click', function() {
        var anchor = $(this).attr('href').split('#')[1];
        if (anchor) {
            if ($('#' + anchor).length > 0) {
                var target = $('#' + anchor).offset().top;

                $('html,body').animate({ scrollTop: target - 94 }, 1000, 'easeInOutExpo');
            }
        }
        return false;
    });
});

(function fixedTopMenu(fixedMenuSelector, fixedMenuDisplayClass, anchorSelector) {
    var $b = $(document.body),
        $d = $(document);

    function fixTopMenuAction() {
        var $topMenu = $(fixedMenuSelector);
        if (Boolean($(anchorSelector).eq(0).offset())) {
            var currentScroll = $(this).scrollTop();
            if (currentScroll >= $(anchorSelector).eq(0).offset().top) {
                $topMenu.addClass(fixedMenuDisplayClass);
            } else {
                $topMenu.removeClass(fixedMenuDisplayClass);
            }
        }
    }
    fixTopMenuAction();

    $(window).on('scroll load', fixTopMenuAction);
})('.stickyTrigger', 'is-stick', '.sticky-here');