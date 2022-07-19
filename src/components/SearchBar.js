import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div>
      {/* 검색창 */}
      <section className="search">
        <div className="container">
          <div className="search-wrapper">
            <h2 className="search-title title">인프런에서 가치를 높이세요</h2>
            <div className="search-box">
              <input
                type="text"
                placeholder="배우고 싶은 지식을 입력해보세요."
              />

              <span className="search-submit icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

    {/* 인기태그 */}
      <section className="popular-tags">
        <ul className="container popular-tags__wrapper">
          <li className="popular-tags__tag-item">
            <Link to="/">#MVC</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Spring Boot</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Back-End</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#JPA</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Front-End</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Python</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Java</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#Spring</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#게임개발</Link>
          </li>
          <li className="popular-tags__tag-item">
            <Link to="/">#JavaScript</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SearchBar;