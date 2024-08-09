document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.header__nav');
    const btnBurger = document.querySelector('.header__burger');
    const btnCloseMenu = document.querySelector('.header-close-menu');

    btnBurger.addEventListener('click', function () {
        navMenu.classList.add('active');
    })
    btnCloseMenu.addEventListener('click', function () {
        navMenu.classList.remove('active');
    })

    const swiper = new Swiper('.swiper', {
        loop: true,
        initialSlide: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 30,
        slidesPerView: 2,
        centeredSlides: true,
        breakpoints: {
            992: {
                slidesPerView: 'auto', // Регулирует количество слайдов на больших экранах
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1, // Один слайд на экране для мобильных устройств
                spaceBetween: 0,
            },
        }
    });
})