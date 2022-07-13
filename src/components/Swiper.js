/* HERO SWIPER */
import { Swiper } from 'swiper/react';

const bannerLists = [
  'Top 50 👑',
  '신규 강의 🎁',
  '나에게 맞는 강의',
  '입문 로드맵',
  '지식공유신청',
  '인프런은 🌱',
  '인프런 동료찾기',
  '개발',
];

//MAIN SWIPER
const heroSwiper = new Swiper('.hero .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  /*autoplay: {
    delay: 1000,
  },*/
  pagination: {
    el: '.hero .swiper-pagination-wrapper .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

//COURSE SWIPER
const courseSwiper = new Swiper('.courses .swiper-container', {
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 6,
  /*autoplay: {
    delay: 1000,
  },*/
  navigation: {
    prevEl: '.courses .swiper-prev',
    nextEl: '.courses .swiper-next ',
  },
});

//CATEGORY SWIPER
const categorySwiper = new Swiper('.category .swiper-container', {
  slidesPerView: 6,
  /*autoplay: {
    delay: 1000,
  },*/
  navigation: {
    prevEl: '.category .swiper-prev',
    nextEl: '.category .swiper-next ',
  },
});

//BANNER2 SWIPER
const bannerSwiper = new Swiper('.banner2 .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.banner2 .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  navigation: {
    prevEl: '.banner2 .swiper-prev',
    nextEl: '.banner2 .swiper-next',
  },
});

//SIGNUP SWIPER
const signupSwiper = new Swiper('.signup .swiper-container', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
});

for (let i = 0; i < heroSwiper.pagination.bullets.length; i++) {
  heroSwiper.pagination.bullets[i].innerText = bannerLists[i];
}

export default heroSwiper;
// export default courseSwiper;
// export default categorySwiper;
// export default categorySwiper;
// export default categorySwiper;
// export default categorySwiper;
