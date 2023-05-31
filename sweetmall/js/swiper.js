// side
var swiper = new Swiper(".sample .mySwiper", {
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
// recomProd
var swiper = new Swiper(".recom .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "none",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
