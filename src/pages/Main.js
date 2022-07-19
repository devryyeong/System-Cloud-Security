import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import CoursesList from '../components/CoursesList';
import Curation from '../components/Curation';
import BottomBanner from '../components/BottomBanner';
import Apply from '../components/Apply';

// import 하면 왜 아무것도 안보이지 ????
// import Swiper from '../components/Swiper';
import '../styles/main.css';

const Main = () => {
  return (
    <div>
      <Banner>{/* <Swiper /> */}</Banner>
      <SearchBar />
      <CoursesList />
      <Curation />
      <BottomBanner />
      <Apply />
    </div>
  );
}

export default Main;