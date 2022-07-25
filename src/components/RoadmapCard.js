import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RoadmapCard(props) {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <Link to="/" className="card">
          <div className="card-image">
            <img src={props.src} alt="로드맵 대표 이미지" />
          </div>
          <div className="card-detail">
            <div className="content">
              <h3>{props.content}</h3>
              <span className="author">{props.author}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RoadmapCard;