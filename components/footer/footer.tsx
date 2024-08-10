import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function Footer() {
  const words = [
    {
      text: 'Built',
    },
    {
      text: 'with',
    },
    {
      text: '❤️',
    },
    {
      text: 'by',
    },
    {
      text: 'Trân Đoàn',
    },
    {
      text: 'siuuu',
    },
    {
      text: 'cute',
    },
    {
      text: 'Corrina_1209.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <footer className='max-w-6xl mx-auto'>
      <span className='flex py-4 text-center sm:text-left'>
        <TypewriterEffect words={words} />
      </span>
    </footer>
  );
}
