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
let loading = document.querySelector(".loading-screen");
window.addEventListener("load", function stake() {
  loading.style.display = "none";
});
//code by 4desol4
