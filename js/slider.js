var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);
