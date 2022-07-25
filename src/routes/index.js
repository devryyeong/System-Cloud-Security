
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from '../pages/Main';
import Roadmap from '../pages/Roadmap';
import Signup from '../pages/Signup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';

const RootRoute = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {/* 헤더,푸터 고정(라우팅의 영향X) */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default RootRoute;
