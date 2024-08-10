'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingScreenProps {
  setLoading: (loading: boolean) => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const loadingText = 'Trân Đoàn...'.split(' ');

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-white via-pink-100 to-white'>
      <div className='flex space-x-2'>
        {loadingText.map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial='hidden'
            animate='visible'
            variants={letterAnimation}
            className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
