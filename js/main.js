$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    });

    $('.team__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        appendArrows: $('.team__slider-arrows'),
    });
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        draggable: false,
        infinite: false,

        appendDots: $('.testimonials__dots'),
    })
    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // $('.program__acc-link').on('click', function(e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })
    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
    $(".header__nav-list a, .header__top-btn a").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top -200;
        $('body,html').animate({ scrollTop: top }, 800);
    });
    $(".header__content-btn a, .about__btn a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
        top = $(id).offset().top -200
        $('body,html').animate({ scrollTop: top }, 800)
    });
    $(".footer__go-top a, .footer__item-link a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
        top = $(id).offset().top -200
        $('body,html').animate({ scrollTop: top }, 800)
    });
    $(".footer__logo a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
        top = $(id).offset().top -200
        $('body,html').animate({ scrollTop: top }, 800)
    });
});
