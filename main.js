const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');
const leftBtn = document.querySelector('.slider__arrow--left');
const rightBtn = document.querySelector('.slider__arrow--right');

if (track && slides.length > 0) {
    let current = 0;

    function updateSlider() {
        // береться реальна поточна ширина слайда, а не фіксоване значення
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(-' + (current * slideWidth) + 'px)';
    }

    leftBtn.addEventListener('click', function () {
        current = (current - 1 + slides.length) % slides.length;
        updateSlider();
    });

    rightBtn.addEventListener('click', function () {
        current = (current + 1) % slides.length;
        updateSlider();
    });

    // перераховує позицію якщо змінився розмір вікна
    window.addEventListener('resize', updateSlider);
}