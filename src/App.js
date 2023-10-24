import { useEffect, useState } from 'react';
import Header from './components/Header';
import MainTop from './components/MainTop';
import CardCarousel from './components/CardCarousel';
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
