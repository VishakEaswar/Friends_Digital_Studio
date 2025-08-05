import React from 'react';
import { AdvsPage } from './AdvsPage';
import ContentPage from './ContentPage';
import { Our_Services } from './Our_Services';
import InfiniteImageSlider from './InfiniteImageSlider';
import AboutPage from './AboutPage';
const HomePage = () => {
  return (
    <>
      <AdvsPage />
      <InfiniteImageSlider/>
      <ContentPage />
      {/* <Our_Services/> */}
      <AboutPage/>
    </>
  );
};

export default HomePage;
