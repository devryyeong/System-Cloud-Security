import React from 'react';
import Header from '../components/Header';
import RoadmapCard from '../components/RoadmapCard';
import Footer from '../components/Footer';
import '../styles/roadmap.css';

const Roadmap = (props) => {
  return (
    <div>
      <Header />

      <main>
        {/* HERO (로드맵 배너) */}
        <section class="roadmap-list">
          <div class="roadmap-hero">
            <h1 class="hero-title">시작부터 실전까지. 로드맵</h1>
            <p class="hero-detail">
              잘 설계된 로드맵을 따라 효율적으로 강의를 학습하세요.
            </p>
            <p class="hero-detail">
              좋은 로드맵을 다른 사람과 공유하고 함께 들어요.
            </p>
            <div class="search-box-container">
              <div class="search-box-wrapper">
                <div class="search-box">
                  <div class="select">
                    <select>
                      <option value="title">제목</option>
                      <option value="title">본문</option>
                      <option value="title">작성자</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="학습 관련 스킬/로드맵 이름/강사명 검색하기"
                  />
                  <button class="btn is-rounded">검색</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="content-wrapper">
            <div class="sort-buttons">
              <div class="buttons-container">
                <button>
                  <span class="icon">
                    <i class="fas fa-border-all"></i>
                  </span>
                </button>
                <button>
                  <span class="icon">
                    <i class="fas fa-bars"></i>
                  </span>
                </button>
              </div>
            </div>

            <div class="main-panel">
              <div class="panel-left">
                <div class="sticky">
                  <div class="select sort-options">
                    <select data-type="order">
                      <option value="seq">추천수</option>
                      <option value="enr">학생수순</option>
                      <option value="rec">좋아요순</option>
                      <option value="share">공유순</option>
                      <option value="id_desc">최신순</option>
                      <option value="id_asc">오래된순</option>
                    </select>
                  </div>

                  <div class="accordions checkbox-accordions">
                    <div class="accordion">
                      <div class="accordion-header toggle">분야별</div>

                      <div class="accordion-body">
                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="1" />
                            <label for="1"> 개발 · 프로그래밍 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="2" />
                            <label for="2"> 보안 · 네트워크 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="3" />
                            <label for="3"> 데이터 사이언스 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="4" />
                            <label for="4"> 크리에이티브 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="5" />
                            <label for="5"> 직무 · 마케팅 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="6" />
                            <label for="6"> 학문 · 외국어 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="7" />
                            <label for="7"> 커리어 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="8" />
                            <label for="8">교양</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="accordion">
                      <div class="accordion-header toggle">로드맵</div>

                      <div class="accordion-body">
                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="2" />
                            <label for="2"> 미참여 로드맵 </label>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <div class="accordion-checkbox">
                            <input type="checkbox" id="3" />
                            <label for="3"> 참여 로드맵 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <a href="#" class="filter-reset">
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M449.9 39.96l-48.5 48.53C362.5 53.19 311.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.97 5.5 34.86-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c37.96 0 73 14.18 100.2 37.8L311.1 178C295.1 194.8 306.8 223.4 330.4 224h146.9C487.7 223.7 496 215.3 496 204.9V59.04C496 34.99 466.9 22.95 449.9 39.96zM441.8 289.6c-16.94-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-37.96 0-73-14.18-100.2-37.8L200 334C216.9 317.2 205.2 288.6 181.6 288H34.66C24.32 288.3 16 296.7 16 307.1v145.9c0 24.04 29.07 36.08 46.07 19.07l48.5-48.53C149.5 458.8 200.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"
                      />
                    </svg>
                  </span>

                  필터 초기화
                </a> */}
                </div>
              </div>
              <div class="panel-right">
                <div class="panel-right-container">
                  <div class="cards-container">
                    <RoadmapCard imgUrl={''} content={''} author={''}/>
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                    <RoadmapCard />
                  </div>

                  {/* <div class="panel-pagination">
                    <ul class="pagination-cover">
                      <a href="/roadmap" class="is-current">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#">6</a>
                      <a href="#">7</a>
                      <a href="#" class="next">
                        <span>다음</span>
                        <span class="icon">
                          <svg
                            width="6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 7 12"
                          >
                            <path
                              fill="#212529"
                              fill-rule="evenodd"
                              d="M6.834 5.602L1.298.165c-.22-.22-.578-.22-.799 0L.166.498c-.221.22-.221.576 0 .797L4.973 6 .17 10.705c-.22.22-.22.577 0 .797l.334.333c.22.22.578.22.799 0l5.535-5.437c.217-.22.217-.576-.004-.796z"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Roadmap;