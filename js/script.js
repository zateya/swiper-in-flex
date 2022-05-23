const gallery = new Swiper('.gallery__slider', {
    // Optional parameters
    loop: true,
    wrapperClass: 'gallery__items',
    slideClass: 'gallery__item',
    slidesPerView: 1,

    breakpoints: {
        640: {
          slidesPerView: 2,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__btn_right',
        prevEl: '.gallery__btn_left',
    },
});
