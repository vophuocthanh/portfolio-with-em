// components/ScrollProgressBar.tsx

'use client';
import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='fixed top-0 left-0 h-1 bg-pink-500 z-50 transition-width duration-200'
      style={{ width: `${scrollPosition}%` }}
    ></div>
  );
};

export default ScrollProgressBar;
