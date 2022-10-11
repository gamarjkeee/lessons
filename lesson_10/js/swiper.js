  const swiper = new Swiper(".swiper", {
    // Optional parameters

    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
  });