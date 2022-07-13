import React from 'react';

function Curation() {
  return (
    <div>
      <section class="curation">
        <div class="container">
          <div class="header">
              <a href="#">
                <h2 class="title">읽어보기
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </h2>
              </a>
          </div>
          
          <div class="curation-container">
            <div class="curation-wrapper">
              <div class="curation-card">
                <a href="#">
                  <img src="https://cdn.inflearn.com/public/files/pages/60cb086b-8ff6-4a7b-a9b0-4e16df0bb07f/newsletter-snack-story-04.png" alt="(추가 혜택 안내) 2022년, 인프런이 준비했어흥" />
                  <div class="card-title">[인프런 스낵 #4] 직장인은 출근할 때 어떤 옷을 입을까? - 개발자 편</div>
                  <div class="card-detail">
                    직장인 OOTD가 궁금하다면? #직장인 #옷장#개발자패션 출근룩은 거기서 거기? (출처: 짱구는 못말려) 사람의 몸에서 뗄...
                  </div>
                </a>
              </div>
              <div class="curation-card">
                <a href="#">
                  <img src="https://cdn.inflearn.com/public/files/pages/0b73c800-ef48-4a49-8afc-09bc94a65a9f/newsletter-infocus-story-01.png" alt="인프런이 사랑받는 특별한 이유는 뭘까? (종료)" />
                  <div class="card-title">[인포커스 #1] 어느 지식공유자의 강의 제작기</div>
                  <div class="card-detail">개발자에서 지식공유자로, 지식공유의 기쁨 #인프런 #지식공유자 #강의제작 #후기 개발자들 사이에서 공유 문화가 특히...
                    
                    </div>
                </a>
              </div>
              <div class="curation-card">
                <a href="#">
                  <img src="https://cdn.inflearn.com/public/files/pages/a1daa960-97d7-479f-bf04-aa9984022e01/newsletter-infmation-story-nn.png" alt="인프런이 사랑받는 특별한 이유는 뭘까? (종료)" />
                  <div class="card-title">[인프메이션 #49] 네이티브 앱 vs 크로스 플랫폼 앱</div>
                  <div class="card-detail">네이티브 앱 vs 크로스 플랫폼 앱 <br /> #Kotlin #Swift #Flutter #Dart 조사에 따르면, 우리나라...</div>
                </a>
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Curation;