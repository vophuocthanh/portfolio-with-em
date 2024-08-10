import { Banner } from '@/components/banner/banner';
import { CarouselPlugin } from '@/components/CarouselAnimations';
import { CompareDemo } from '@/components/CompareDemo';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Introduction from '@/components/introduction/introduction';
import { MeteorsDemo } from '@/components/MeteorsDemo';
import Project from '@/components/project/project';
import ScrollProgressBar from '@/components/ScrollProgressBar.tsx';

export default function Home() {
  return (
    <main className='w-full h-full sm:px-0 px-4'>
      <ScrollProgressBar />
      <Header />
      <Banner />
      <div className='max-w-6xl mx-auto mb-10'>
        <CarouselPlugin />
      </div>
      <Introduction />
      <MeteorsDemo />
      <CompareDemo />
      <Project />
      <Footer />
    </main>
  );
}
