const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const body = document.body;

let activeSlide = 0;

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0)
        activeSlide = slides.length - 1;
    setBdyBg();
    setActiveSlide();
});

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1)
        activeSlide = 0;
    
    setBdyBg();
    setActiveSlide();
});

function setBdyBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}