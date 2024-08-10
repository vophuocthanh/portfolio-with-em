import Link from 'next/link';
import { MobilePage } from '../mobile-slidebar';
import { ModeToggle } from '../mode-toggle';

export default function Header() {
  const isProPlan = false;
  return (
    <div className='w-full border-b'>
      <div className='py-6 max-w-6xl mx-auto flex justify-between items-center '>
        <Link
          href='/'
          className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'
        >
          Trân Đoàn
        </Link>
        <div className='flex gap-4 items-center'>
          <div className='text-2xl sm:flex hidden gap-4 font-medium'>
            {/* <Link href='/blog' className='hover:text-green-400 hover:underline'>
              Blogs
            </Link> */}
            <Link
              href='/project'
              className='hover:text-green-400 hover:underline'
            >
              Projects
            </Link>
            <Link
              href='/'
              target='_blank'
              className='hover:text-green-400 hover:underline'
            >
              MyCV
            </Link>
          </div>
          <div className='sm:hidden'>
            <MobilePage />
          </div>
          <hr className='w-px h-8 bg-gray-300' />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
