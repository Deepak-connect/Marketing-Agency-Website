// Swiper Slider JS
  var swiper = new Swiper(".clients", {
    slidesPerView:5,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    }
  });

  var swiper = new Swiper(".testimonials", {
    slidesPerView:2,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
    }
  });

//   swiper js ends