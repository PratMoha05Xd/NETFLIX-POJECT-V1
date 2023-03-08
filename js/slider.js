// Not required, but you can add JavaScript to pause and resume the animation when the user hovers over the slider

const slider = document.querySelector('.hero-image-slider');

slider.addEventListener('mouseover', () => {
  slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
  slider.style.animationPlayState = 'running';
});

const heroImage = document.querySelector(".hero-image");
const heroSlides = heroImage.querySelectorAll("img");
const heroPrevButton = document.querySelector(".hero-prev-button");
const heroNextButton = document.querySelector(".hero-next-button");

let heroCurrentSlide = 0;
let heroSlideInterval = setInterval(heroNextSlide, 3000);

function heroNextSlide() {
  heroSlides[heroCurrentSlide].classList.remove("active-slide");
  heroCurrentSlide = (heroCurrentSlide + 1) % heroSlides.length;
  heroSlides[heroCurrentSlide].classList.add("active-slide");
}

function heroPrevSlide() {
  heroSlides[heroCurrentSlide].classList.remove("active-slide");
  heroCurrentSlide = (heroCurrentSlide - 1 + heroSlides.length) % heroSlides.length;
  heroSlides[heroCurrentSlide].classList.add("active-slide");
}

heroNextButton.addEventListener("click", () => {
  heroNextSlide();
  clearInterval(heroSlideInterval);
  heroSlideInterval = setInterval(heroNextSlide, 3000);
});

heroPrevButton.addEventListener("click", () => {
  heroPrevSlide();
  clearInterval(heroSlideInterval);
  heroSlideInterval = setInterval(heroNextSlide, 3000);
});


