import React from 'react';
import { Link } from 'react-router-dom';

function CoursesList () {
  return (
    <div>
      <Courses title={'나와 비슷한 사람들이 수강한 강의'} />
      <Courses title={'내가 학습한 JavaScript 분야 인기 강의'} />
      <Courses title={'내가 학습한 알고리즘 분야 인기 강의'} />
    </div>
  );
}

const Courses = (props) => {
  return (
    <div>
      <section id="similar" class="courses slider">
        <div class="container">
          <div class="courses-wrapper">
            <div class="header">
              <div class="courses-header">
                <h2 class="title">{props.title}</h2>
              </div>
            </div>

            <div class="courses-lists">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="card course-card">
                      <Link to="/" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/public/course-325982-cover/8b120ba4-43ce-4e16-b26e-53d3231867d2"
                            alt="퍼블리셔"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            퍼블리셔 취업 진짜 실전 가이드
                          </div>
                          <div class="course-instructor">
                            코딩웍스(Coding Works)
                          </div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </Link>
                      <div class="course-card--back"></div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="card course-card">
                      <a href="#" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/public/courses/326354/cover/1d6f78c0-86a5-4585-b7f5-49d57582e964"
                            alt="image"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            비전공자를 위한 개발자 취업 올인원 가이드 [통합편]
                          </div>
                          <div class="course-instructor">한정수</div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="card course-card">
                      <a href="#" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/public/courses/327964/cover/40046314-de00-4fdd-b0d4-e9887943c299/327964-eng.jpg"
                            alt="image"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            Python을 이용한 개인화 추천시스템
                          </div>
                          <div class="course-instructor">거친코딩</div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="card course-card">
                      <a href="#" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/public/courses/326004/cover/54347b92-0d8c-4d53-81d4-736097149f97"
                            alt="image"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            8명의 비전공자는 어떻게 개발자로 취업했을까
                          </div>
                          <div class="course-instructor">앨런(Allen)</div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="card course-card">
                      <a href="#" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d"
                            alt="image"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            비전공자를 위한 진짜 입문 올인원 개발 클래스1
                          </div>
                          <div class="course-instructor">그랩</div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <div class="swiper-slide">
                    <div class="card course-card">
                      <a href="#" class="course-card--front">
                        <div class="card-image">
                          <img
                            src="https://cdn.inflearn.com/wp-content/uploads/es6_8.jpg"
                            alt="인터랙티브 개발 실무 끝장내기 [역량 강화편]"
                          />
                        </div>
                        <div class="card-detail">
                          <div class="course-title">
                            인터랙티브 개발 실무 끝장내기 [역량 강화편]
                          </div>
                          <div class="course-instructor">코딩일레븐</div>
                          <div class="course-rating">
                            <div class="rating-stars">
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="star"
                                class="svg-inline--fa fa-star fa-w-18"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                width="16"
                                height="16"
                                data-value="1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                            </div>
                            <span class="review-count">(28)</span>
                          </div>
                          <div class="course-price">
                            <span>₩35,200</span>
                          </div>
                          <div class="course-tags tags">
                            <span class="tag">+300명</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>

              <div class="swiper-prev navBtn circle">
                <i class="fas fa-chevron-left "></i>
              </div>

              <div class="swiper-next navBtn circle">
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesList;