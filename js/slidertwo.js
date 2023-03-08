const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let slideWidth = slides[0].clientWidth;
let intervalId;

function moveSlides() {
  slideContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  moveSlides();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  moveSlides();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

intervalId = setInterval(nextSlide, 5000);

window.addEventListener('resize', () => {
  slideWidth = slides[0].clientWidth;
  moveSlides();
});

slideContainer.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

slideContainer.addEventListener('mouseout', () => {
  intervalId = setInterval(nextSlide, 5000);
});
