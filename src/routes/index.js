
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Roadmap from '../pages/Roadmap';

const RootRoute = () => {
  return (
    <BrowserRouter>
    {/* 헤더가 고정이니까 라우팅의 영향X */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
// 중첩라우팅, outlet
// 리라돔 공부
// a태그를 Link로 바꿔줘야 함 (a태그는 새로고침을 하기 때문)