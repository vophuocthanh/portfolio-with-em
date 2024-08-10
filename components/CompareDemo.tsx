import { Compare } from '@/components/ui/compare';

export function CompareDemo() {
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-xl font-bold mb-10'>Code Example</h1>
      <div className='flex flex-col justify-center items-center mx-auto md:flex-row gap-10'>
        <div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 w-96 sm:w-[33.5rem] px-4'>
          <Compare
            firstImage='https://assets.aceternity.com/code-problem.png'
            secondImage='https://assets.aceternity.com/code-solution.png'
            firstImageClassName='object-cover object-left-top'
            secondImageClassname='object-cover object-left-top'
            className='h-[250px] w-[350px] md:h-[500px] md:w-[500px]'
            slideMode='hover'
          />
        </div>
        <div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 w-96 sm:w-[33.5rem] px-4'>
          <Compare
            firstImage='https://res.cloudinary.com/practicaldev/image/fetch/s--ZHyz-6pL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ahdkosx5po8qu0rh0qqs.png'
            secondImage='https://raw.githubusercontent.com/kufii/CodeSnap/master/examples/material_operator-mono.png'
            firstImageClassName='object-cover object-left-top'
            secondImageClassname='object-cover object-left-top'
            className='h-[250px] w-[350px] md:h-[500px] md:w-[500px]'
            slideMode='hover'
          />
        </div>
      </div>
    </div>
  );
}
