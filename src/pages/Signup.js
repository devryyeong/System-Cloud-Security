import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import '../styles/signup.css';
import nickNameState from '../recoil/User';

const Signup = () => {
  // const [nickName, setNickName] = useState("");
  const nickName = useRecoilValue(nickNameState);

  return (
    <div>
      <main>
        <section className="signup">
          <h2 className="signup-title">회원가입</h2>
          {/* 넣어준걸 불러오기 */}
          <div>{nickName}님 하이</div>

          <div className="signup-messages">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p>나의 온라인 사수, 인프런</p>
                </div>
                <div className="swiper-slide">
                  <p>나의 성장을 돕는 IT 실무 지식 플랫폼</p>
                </div>

                <div className="swiper-slide">
                  <p>인프런에서 가치를 높이세요</p>
                </div>
                <div className="swiper-slide">
                  <p>인프런에서 다양한 성장의 기회를 얻으세요</p>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-main">
            <form className="signup-form">
              <div className="form-input">
                <label for="email" className="form-label">
                  이메일
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="example@inflearn.com"
                />
              </div>

              <div className="form-input">
                <label for="email-confirm" className="form-label">
                  이메일 확인
                </label>
                <input
                  id="email-confirm"
                  type="text"
                  placeholder="example@inflearn.com"
                />
              </div>

              <div className="form-input">
                <label for="password" className="form-label">
                  비밀번호
                </label>
                <div className="password-input">
                  <input id="password" type="text" placeholder="******" />
                  <span className="password-eye">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                      ></path>
                      <path
                        fill="#212529"
                        fill-rule="evenodd"
                        d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="form-input">
                <label for="password-confirm" className="form-label">
                  비밀번호 확인
                </label>
                <div className="password-input">
                  <input
                    id="password-confirm"
                    type="text"
                    placeholder="******"
                  />
                  <span className="password-eye">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                      ></path>
                      <path
                        fill="#212529"
                        fill-rule="evenodd"
                        d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </form>

            <button onclick="location.href='index.html'" className="btn">
              가입하기
            </button>

            <div className="form-footer">
              <span className="footer-policy">
                가입 시, 인프런의
                <a href="#">이용약관</a>,<a href="#">개인정보취급방침</a>에
                동의합니다.
              </span>

              <p className="footer-agree">
                <label className="allow-marketing-label" for="allow-marketing">
                  인프런의 할인 및 유용한 소식을 받아볼래요.
                </label>
                <input id="allow-marketing" type="checkbox" />
              </p>
            </div>

            <div className="signup-sns">
              <hr className="divider" />
              <span className="sns-title">간편 회원가입</span>
              <div className="sns-buttons">
                <button id="kakao" className="btn">
                  <svg
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                    height="17"
                    viewBox="0 0 18 17"
                  >
                    <g
                      transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        fill="#212529"
                        d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"
                      ></path>
                    </g>
                  </svg>
                </button>

                <button id="google" className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="#4285F4"
                      d="M17.785 9.169c0-.738-.06-1.276-.189-1.834h-8.42v3.328h4.942c-.1.828-.638 2.073-1.834 2.91l-.016.112 2.662 2.063.185.018c1.694-1.565 2.67-3.867 2.67-6.597z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M9.175 17.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.372 0-4.385-1.564-5.102-3.727l-.105.01-2.769 2.142-.036.1c1.475 2.93 4.504 4.943 8.012 4.943z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M4.073 10.743c-.19-.558-.3-1.156-.3-1.774 0-.618.11-1.216.29-1.774l-.005-.119L1.254 4.9l-.091.044C.555 6.159.206 7.524.206 8.969c0 1.445.349 2.81.957 4.026l2.91-2.252z"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M9.175 3.468c1.684 0 2.82.728 3.468 1.335l2.531-2.471C13.62.887 11.598 0 9.175 0 5.667 0 2.638 2.013 1.163 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
