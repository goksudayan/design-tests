let currentSlide = 0;

const slides = document.querySelectorAll('.testimonial-container');
const sliders = document.querySelectorAll('.slider');
const carousel = document.querySelector('.carousel-inner');


function showSlide(index) {

    index = index%3;

    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        slide.style.transform = 'scale(1)';
        slide.style.zIndex = 0;
        slide.style.opacity = 0.25;
    });

    carousel.style.transform = `translateX(${-currentSlide * 75}vw)`;

    slides[index].style.transform = 'scale(1.2)';
    slides[index].style.zIndex = 1;
    slides[index].style.opacity = 1.0;

    sliders.forEach( (slider, i) => {
        slider.classList.remove('sl-active');
        slider.classList.add('sl-passive');
        }
    )

    sliders[index].classList.remove('sl-passive');
    sliders[index].classList.add('sl-active');
}


function changeSlide(n) {

    slides[currentSlide].style.transform = 'scale(1)';

    if (n == 2) {
        showSlide(n);
    }
    else if (n == 0) {
        showSlide(0);
    }
    else {
        showSlide(n%3);
    }
}

changeSlide(currentSlide);

const section = document.querySelectorAll('.animate');
console.log(section);

function activateSection() {
    section.forEach( (sect, i) => {
        sect.classList.remove('.animate');
        sect.classList.add('animated');
    })
}

setTimeout(activateSection, 300);


