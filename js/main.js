$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        dots: false
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
});