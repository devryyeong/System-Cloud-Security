import React from 'react';

function RoadmapCard() {
  return (
      <div class="card-container">
        <div class="card-wrapper">
          <a href="#" class="card">
            <div class="card-image">
              <img
                src="https://cdn.inflearn.com/public/roadmaps/e65b9afb-399e-49b5-9c0c-06d061da480a/roadmap-145.png"
                alt="로드맵 대표 이미지"
              />
            </div>
            <div class="card-detail">
              <div class="content">
                <h3>
                  [입문~활용] 기초부터 응용까지, 한 방에 끝내는 파이썬 (Inflearn
                  Original)
                </h3>
                <span class="author">By 인프런</span>
              </div>
            </div>
          </a>
        </div>
      </div>
  );
}

export default RoadmapCard;