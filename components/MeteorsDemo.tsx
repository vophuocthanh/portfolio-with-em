import { Meteors } from '@/components/ui/meteors';

export function MeteorsDemo() {
  const textData = [
    {
      id: 1,
      textTitle: 'Frontend Developer',
      textDesc:
        'Frontend, also known as user interface development, is the part of web development that involves building and designing the elements that end users interact with directly. A frontend developer’s job involves using programming languages ​​like HTML, CSS, and JavaScript to build the interface and user experience (UX). They also work with libraries and frameworks like React, Angular, or Vue.js to create dynamic and responsive web applications, ensuring that the website works well across different devices and browsers.',
      button: 'View Projects',
    },
    {
      id: 2,
      textTitle: 'Backend Developer',
      textDesc:
        'Backend, also known as server-side development, is the part of web development that involves building and managing services and databases that are not directly visible to users. Backend developers jobs include building and maintaining APIs, handling data and application logic, and ensuring system performance and security. They typically use programming languages ​​such as Java, Python, Ruby, or Node.js and work with database management systems such as MySQL, PostgreSQL, or MongoDB to store and manage data.',
      button: 'View Projects',
    },
    {
      id: 3,
      textTitle: 'Fullstack Developer',
      textDesc:
        'Fullstack, also known as full stack development, is a field of web development that combines both frontend and backend. Full stack developers are able to work on both parts of a web application: from building the user interface (frontend) to developing and managing server and database services (backend). They need to have a solid understanding of technologies and tools in both areas, allowing them to design and implement comprehensive solutions and solve problems effectively and efficiently, on the backend.',
      button: 'View Projects',
    },
  ];
  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center flex-col md:flex-row gap-4 my-20'>
      {textData.map((data) => (
        <div className='w-full max-w-xl sm:max-w-xs' key={data.id}>
          <div className='absolute inset-0 h-full w-full  transform scale-[0.80] rounded-full blur-3xl' />
          <div className='relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
            <div className='h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-2 w-2 text-gray-300'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
                />
              </svg>
            </div>
            <h1 className='font-bold text-xl text-white mb-4 relative z-50'>
              {data.textTitle}
            </h1>
            <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
              {data.textDesc}
            </p>
            <button className='border hover:shadow-md hover:scale-105 px-4 py-1 rounded-lg  border-gray-500 text-gray-300'>
              {data.button}
            </button>
            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
