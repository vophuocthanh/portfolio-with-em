import SectionInViewRight from '../SectionInVewRight';

export default function Introduction() {
  return (
    <SectionInViewRight className='max-w-6xl mx-auto space-y-4'>
      <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-pink-600'>
        Introduction
      </h1>
      <span className='sm:text-6xl text-2xl font-bold'>Overview...</span>
      <p className='sm:w-3/5 w-full'>
        As a 21 year old enthusiastic girl, I am building a career in backend
        programming with Java. With a solid foundation of knowledge and passion
        for technology, I have been constantly learning to develop powerful and
        efficient applications.
      </p>
    </SectionInViewRight>
  );
}
