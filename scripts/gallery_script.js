let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(i) {
  showSlides((slideIndex += i));
}

function currentSlide(i) {
  showSlides((slideIndex = i));
}

function showSlides(i) {
  const slides = document.getElementsByClassName("slide");
  const caption = document.getElementById("caption");

  if (slides.length === 0) {
    return;
  }

  if (i > slides.length) {
    slideIndex = 1;
  }
  if (i < 1) {
    slideIndex = slides.length;
  }
  for (let slide = 0; slide < slides.length; slide++) {
    slides[slide].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  caption.textContent = slides[slideIndex - 1].querySelector("img").alt;
}
