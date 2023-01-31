import Swiper from 'swiper';


new Swiper('.slider-reviews', {
    spaceBetween: 24,
    observer: true,
    observeParents: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 1.5,
            centeredSlidesBounds: true,
            centeredSlides: true,
        },
        480: {
            slidesPerView: 1,
            centeredSlidesBounds: true,
            centeredSlides: true,
        }
    }
})