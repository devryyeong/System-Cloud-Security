import React from 'react'

function BottomBanner() {
  return (
    <div>
      <section class="banner2 slider">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="container">
                <div class="banner-title">
                  <h3>
                    지식을 나눠주세요. 
                    <br />
                    쉽게 시작하고 합당한 보상을 받을 수 있어요.
                  </h3>
                </div>
                <a href="#" class="btn">지식공유 알아보기</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="container">
                <div class="banner-title">
                  <h3>
                    모든 팀원이 인프런의 강의들을 
                    <br />
                    자유롭게 학습하는 환경을 제공해주세요.
                  </h3>
                </div>
                <a href="#" class="btn">비즈니스 알아보기</a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="container">
                <div class="banner-title">
                  <h3>
                    지식을 나눠주세요. 
                    <br />
                    쉽게 시작하고 합당한 보상을 받을 수 있어요.
                  </h3>
                </div>
                <a href="#" class="btn">지식공유 알아보기</a>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="buttons-container container">
            <div class="buttons-wrapper">
              <div class="swiper-prev navBtn">
                <span class="icon">
                <i class="fas fa-chevron-left"></i>
                </span>
              </div>

              <div class="swiper-next navBtn">
                <span class="icon">
                <i class="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default BottomBanner