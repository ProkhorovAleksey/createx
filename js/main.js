$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    });
    
    $('.team__slider').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 4,
        infinite: true,
        draggable:false,
        waitForAnimate:false,
        appendArrows: $('.team__slider-arrows'),
    });
    $('.team__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows:false,
        dots: true,
        draggable:false,
        infinite: false,
        
        appendDots: $('.testimonials__dots'),
    })
    $('.testimonials__prev').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
});
