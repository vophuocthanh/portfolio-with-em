import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h2 className='text-6xl font-bold text-red-400'>Not Found</h2>
      <p className='text-3xl'>Could not find requested resource</p>
      <Link href='/' className='text-3xl text-green-400 hover:underline'>
        Back Home
      </Link>
    </div>
  );
}
