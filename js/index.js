let harmburger = document.getElementById("harmburger");
const nav = document.getElementById("nav");
const navbar = document.querySelector(".navbar");
let cover = document.querySelector(".cover-page");

harmburger.addEventListener("click", function () {
  nav.style.right = "0";
  cover.style.display = "block";
});
function fun() {
  nav.style.right = "-280px";
  cover.style.display = "none";
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides((slideIndex = n));
}
let slides = document.getElementsByClassName("slide-container");
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  let number = document.getElementsByClassName("number");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < number.length; i++) {
    number[i].className = number[i].className.replace(" tame", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" stay", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  number[slideIndex - 1].className += " tame";
  dots[slideIndex - 1].className += " stay";
}
setInterval(function () {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  currentSlide(slideIndex);
}, 10000);
let loading = document.querySelector(".loading-screen");
window.addEventListener("load", function stake() {
  loading.style.display = "none";
});
//code by 4desol4
