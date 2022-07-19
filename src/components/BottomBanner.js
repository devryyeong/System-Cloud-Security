import React from 'react';
import { Link } from 'react-router-dom';

function BottomBanner() {
  return (
    <div>
      <section className="banner2 slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <div className="banner-title">
                  <h3>
                    지식을 나눠주세요. 
                    <br />
                    쉽게 시작하고 합당한 보상을 받을 수 있어요.
                  </h3>
                </div>
                <Link to="/" className="btn">지식공유 알아보기</Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="banner-title">
                  <h3>
                    모든 팀원이 인프런의 강의들을 
                    <br />
                    자유롭게 학습하는 환경을 제공해주세요.
                  </h3>
                </div>
                <Link to="/" className="btn">비즈니스 알아보기</Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="banner-title">
                  <h3>
                    지식을 나눠주세요. 
                    <br />
                    쉽게 시작하고 합당한 보상을 받을 수 있어요.
                  </h3>
                </div>
                <Link to="/" className="btn">지식공유 알아보기</Link>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="buttons-container container">
            <div className="buttons-wrapper">
              <div className="swiper-prev navBtn">
                <span className="icon">
                <i className="fas fa-chevron-left"></i>
                </span>
              </div>

              <div className="swiper-next navBtn">
                <span className="icon">
                <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default BottomBanner;