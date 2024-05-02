/* --------- Bootstrap Carousel --------- */ 
const myCarouselElement = document.querySelector('#carouselExampleIndicators')
        const carousel = new bootstrap.Carousel(myCarouselElement, {
           interval: 3000,
           touch: false
});
/* --------- Initialize Swiper --------- */ 
var swiper = new Swiper(".eventSwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 600,
  loop: true,
});

var swiper = new Swiper(".verSwiper", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 600,
  loop: true,
});

  /*-- Mobile Responsiveness --*/
  const menuBtn = document.querySelector(".menu-btn");
  const hBtn = document.querySelector(".h-btn");

  menuBtn.addEventListener("click", () => {
    hBtn.classList.toggle("hBtn");
  });