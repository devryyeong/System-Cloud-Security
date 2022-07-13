import React from 'react'

const SearchBar = () => {
  return (
    <div>
      {/* 검색창 */}
      <section class="search">
        <div class="container">
          <div class="search-wrapper">
            <h2 class="search-title title">인프런에서 가치를 높이세요</h2>
            <div class="search-box">
              <input
                type="text"
                placeholder="배우고 싶은 지식을 입력해보세요."
              />

              <span class="search-submit icon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </section>

    {/* 인기태그 */}
      <section class="popular-tags">
        <ul class="container popular-tags__wrapper">
          <li class="popular-tags__tag-item">
            <a href="#">#MVC</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Spring Boot</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Back-End</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#JPA</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Front-End</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Python</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Java</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#Spring</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#게임개발</a>
          </li>
          <li class="popular-tags__tag-item">
            <a href="#">#JavaScript</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SearchBar;