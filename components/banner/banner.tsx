'use client';

import { Facebook, Github, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTiktok } from 'react-icons/fa';
import headerImg from '../../public/anh-6.jpg';
import SectionInViewUp from '../SectionInViewUp';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Java Backend', 'Java Fullstack', 'Fullstack'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='max-w-6xl mx-auto'>
      <SectionInViewUp className='sm:flex flex-col sm:flex-row justify-center items-center my-10 sm:my-24'>
        <div className='sm:w-3/5 space-y-4'>
          <span className='font-bold  tracking-wider px-4 py-2 bg-gradient-to-b from-blue-400 to-pink-600 text-white sm:text-2xl text-xl rounded inline-block'>
            Welcome to my Portfolio 😊
          </span>
          <h1 className='my-4 sm:text-5xl text-2xl font-bold'>
            {`Hi! I'm Trân Đoàn`}{' '}
            <span
              className='txt-rotate'
              data-period='1000'
              data-rotate='[ "siuu cute", "Marketing"]'
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'>
                {text}
              </span>
            </span>
          </h1>
          <p className='sm:w-[67%] sm:text-2xl text-lg font-medium'>
            I aim to become an influential backend expert, not only developing
            technology products but also creating solutions that make life
            better.
          </p>
          <div className='flex gap-4 items-center'>
            <Link
              href='https://www.facebook.com/profile.php?id=100012134627484'
              target='_blank'
              className=' bg-blue-500 p-2 rounded-full hover:scale-110'
            >
              <Facebook className='text-white'></Facebook>
            </Link>
            <Link
              href='https://www.tiktok.com'
              target='_blank'
              className=' bg-black p-2 rounded-full hover:scale-110'
            >
              <FaTiktok className='text-white text-2xl'></FaTiktok>
            </Link>
            <Link
              href='https://www.instagram.com/corrina_1209/'
              target='_blank'
              className='bg-gradient-to-r from-purple-700 via-red-500 to-yellow-300 p-2 rounded-full hover:scale-110'
            >
              <Instagram className='text-white'></Instagram>
            </Link>
            <Link
              href='https://github.com'
              target='_blank'
              className=' bg-black p-2 rounded-full hover:scale-110'
            >
              <Github className='text-white'></Github>
            </Link>
          </div>
        </div>
        <div className='sm:w-[30rem] mt-16 sm:mt-0'>
          <Image
            src={headerImg}
            alt='Header Img'
            className='border rounded-full w-full h-full object-cover'
          />
        </div>
      </SectionInViewUp>
    </section>
  );
};
