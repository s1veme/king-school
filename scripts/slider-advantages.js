import Swiper from 'swiper';

new Swiper('.slider-advantages', {
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    breakpoints: {
        1000: {
            slidesPerView: 3,
        }
    },
});

new Swiper('.slider-advantages-clients', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1000: {
            slidesPerView: 2.5,
            centeredSlidesBounds: true,
        }
    },
});