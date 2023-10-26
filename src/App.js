import { useEffect, useState } from 'react';
import Header from './components/Header';
import MainTop from './components/MainTop';
import CardCarousel from './components/CardCarousel';
import StorySection from './components/StorySection';
import NewWorldSection from './components/NewWorldSection';
import ExperienceSection from './components/ExperienceSection';
import HowToUseSection from './components/HowToUseSection';
import RecruitmentSection from './components/RecruitmentSection';
import UserViewSection from './components/UserViewSection';
import Banner from './components/Banner';
import SharePortfolioSection from './components/SharePortfolioSection';
import NewMediaSection from './components/NewMediaSection';
import BeginnerSection from './components/BeginnerSection';
import Footer from './components/Footer';

function App() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    _setScreenSize();
  }, [screenSize]);

  return (
    <>
      <Header />
      <MainTop />
      <CardCarousel />
      <StorySection />
      <NewWorldSection />
      <UserViewSection />
      <ExperienceSection />
      <HowToUseSection />
      <RecruitmentSection />
      <Banner />
      <SharePortfolioSection />
      <NewMediaSection />
      <BeginnerSection />
      <Banner />
      <Footer />
    </>
  );
}

export default App;

export const _setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
};
