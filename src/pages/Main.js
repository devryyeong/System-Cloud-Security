import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CoursesList from '../components/CoursesList';
import Curation from '../components/Curation';
import BottomBanner from '../components/BottomBanner';
import Apply from '../components/Apply';

// import Swiper from '../components/Swiper';
import '../styles/main.css';

const Main = () => {
  return (
    <div>
      <Header />
      <Banner>{/* <Swiper /> */}</Banner>
      <SearchBar />
      <CoursesList />
      <Curation />
      <BottomBanner />
      <Apply />
      <Footer />
    </div>
  );
}

export default Main;