
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Roadmap from '../pages/Roadmap';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootRoute = () => {
  return (
    <BrowserRouter>
      {/* 헤더,푸터 고정(라우팅의 영향X) */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRoute;
// Outlet 사용한 중첩라우팅, 리라돔 공부
// a태그를 Link로 바꿔주기
// useEffect로 더미데이터 추가하기
// 기존 <CoursesList /> 컴포넌트 안에 Courses라는 함수를 두었던 것을 컴포넌트로 나눔.