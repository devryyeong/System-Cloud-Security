import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../static/courses.json';

const Courses = (props) => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(coursesData.courses1);
  }, []);

  return (
    <div>
      <section id="similar" className="courses slider">
        <div className="container">
          <div className="courses-wrapper">
            <div className="header">
              <div className="courses-header">
                <h2 className="title">{props.title}</h2>
              </div>
            </div>

            <div className="courses-lists">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {data1 && data1.map((item) => {
                    return (
                      <div className="swiper-slide">
                        <div className="card course-card">
                          <Link to="/" className="course-card--front">
                            <div className="card-image">
                              <img
                                src={item.src}
                                alt="미리보기이미지"
                              />
                            </div>
                            <div className="card-detail">
                              <div className="course-title">{item.title}</div>
                              <div className="course-instructor">{item.instructor}</div>
                              <div className="course-rating">
                                <div className="rating-stars">
                                  <svg
                                    aria-hidden="true"
                                    data-prefix="fas"
                                    data-icon="star"
                                    className="svg-inline--fa fa-star fa-w-18"
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
                                    className="svg-inline--fa fa-star fa-w-18"
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
                                    className="svg-inline--fa fa-star fa-w-18"
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
                                    className="svg-inline--fa fa-star fa-w-18"
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
                                    className="svg-inline--fa fa-star fa-w-18"
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
                                <span className="review-count">(28)</span>
                              </div>
                              <div className="course-price">
                                <span>{item.price}</span>
                              </div>
                              <div className="course-tags tags">
                                <span className="tag">{item.tags}</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                  
                </div>
              </div>

              <div className="swiper-prev navBtn circle">
                <i className="fas fa-chevron-left "></i>
              </div>

              <div className="swiper-next navBtn circle">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;