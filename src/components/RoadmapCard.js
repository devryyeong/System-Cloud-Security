import React from 'react';
import { Link } from 'react-router-dom';

function RoadmapCard() {
  return (
      <div className="card-container">
        <div className="card-wrapper">
          <Link to="/" className="card">
            <div className="card-image">
              <img
                src="https://cdn.inflearn.com/public/roadmaps/e65b9afb-399e-49b5-9c0c-06d061da480a/roadmap-145.png"
                alt="로드맵 대표 이미지"
              />
            </div>
            <div className="card-detail">
              <div className="content">
                <h3>
                  [입문~활용] 기초부터 응용까지, 한 방에 끝내는 파이썬 (Inflearn
                  Original)
                </h3>
                <span className="author">By 인프런</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default RoadmapCard;