import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <div className='max-w-6xl mx-auto mt-24'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-xl font-bold'>Project</h1>
        <div className='flex gap-2 items-center hover:text-green-400'>
          <Link href='/project' className='text-xl font-bold'>
            View all Project
          </Link>
          <MoveRight className='text-xl' />
        </div>
      </div>
      <div className='w-full flex items-center mt-10 gap-8 border-b border-gray-800 justify-center pb-20 flex-wrap'>
        <Link
          href='/'
          className='w-[20rem] h-[24rem] rounded-bl-md rounded-br-md space-y-4 shadow-md hover:scale-105 border'
        >
          <Image
            src='https://images.unsplash.com/photo-1534162802244-d6f69e9048da?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='banner'
            width={500}
            height={500}
            className='w-full h-44 object-cover '
          />
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold'>Comming Soon</h1>
            <p className='text-sm'>Coming Soon</p>
          </div>
          {/* <p className='p-2 flex items-center text-center font-medium'>
            Click to see more
          </p> */}
        </Link>
      </div>
    </div>
  );
}
