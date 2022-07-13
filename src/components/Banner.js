import React from 'react';
import '../styles/common.css';
import '../styles/slider.css';
import '../styles/swiper.css';

const Banner = () => {
  return (
    <div>
      <section class="hero">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <a class="swiper-slide" href="#">
              <div class="banner-bg">
                <div class="container">
                  <div class="banner-left">
                    <div class="banner-tags">
                      <span>오늘 뭐 듣지?</span>
                    </div>
                    <h1 class="banner-title title">무슨 강의 들을지 고민이라면?<br />현직자 Top 50 먼저 보기 👀</h1>
                    <p class="banner-details">
                      입문부터 실전까지!<br />믿고 보는 실무자 Pick
                    </p>
                  </div>
                  <div class="banner-right">
                    <img
                      src="https://cdn.inflearn.com/public/main_sliders/7f3b415a-7267-49fc-9c68-9926b8c5f600/%5B22%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5Db2b_top50_main_521.gif"
                      alt="현직자 Top 50"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a class="swiper-slide" href="#">
              <div class="banner-bg">
                <div class="container">
                  <div class="banner-left">
                    <h1 class="banner-title title">
                      뭘 들어야 하지? 🤔<br />나에게 딱 맞는 입문 강의
                    </h1>
                    <p class="banner-details">
                      어디서부터 시작해야 할지 모르는<br />당신을 위한 입문 강의
                    </p>
                  </div>
                  <div class="banner-right">
                    <img
                      src="https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png"
                      alt="입문 강의"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a class="swiper-slide" href="#">
              <div class="banner-bg">
                <div class="container">
                  <div class="banner-left">
                    <div class="banner-tags">
                      <span>추천 학습 로드맵</span>
                    </div>
                    <h1 class="banner-title title">
                      왕초보를 위한 <br />Lv. 1 인프런 로드맵 📖
                    </h1>
                    <p class="banner-details">
                      인프런이 처음이라면, 길라잡이가 되어드릴게요.
                    </p>
                  </div>
                  <div class="banner-right">
                    <img
                      src="https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif"
                      alt="인프런 로드맵"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a class="swiper-slide" href="#">
              <div class="banner-bg">
                <div class="container">
                  <div class="banner-left">
                    <div class="banner-tags">
                      <span>얼리버드 20%</span>
                    </div>
                    <h1 class="banner-title title">
                      때려 박는 코드는 이제 그만! 모듈식 개발로 레벨업 💪
                    </h1>
                    <p class="banner-details">
                      확장성과 재사용성이 뛰어난 모듈식 프로그래밍을 배워보세요.
                    </p>
                  </div>
                  <div class="banner-right">
                    <img
                      src="https://cdn.inflearn.com/public/main_sliders/f1ec5427-8733-4b8e-9311-328f60bcf4bf/327970-eng.png"
                      alt="때려 박는 코드는 이제 그만! 
                      모듈식 개발로 레벨업 💪"
                    />
                  </div>
                </div>
              </div>
            </a>
            
            
          </div>
          <div class="pagination-controller">
            <div class="container">
              <div class="swiper-pagination-controller">
                <span class="current-index">2/11</span>
                <div class="controller-wrapper">
                  <span class="previous-button">
                    <i class="fas fa-chevron-left"></i>
                  </span>
                  <span class="play">
                    <i class="fas fa-play"></i>
                  </span>
                  <span class="next-button">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div class="divider"></div>
              <div class="swiper-pagination-wrapper">
                <div class="swiper-pagination"></div>
              </div>
              <button class="btn">
                <i class="fas fa-chevron-up"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner