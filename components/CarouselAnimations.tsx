'use client';
import anh1 from '@/public/anh-1.jpg';
import anh2 from '@/public/anh-2.jpg';
import anh3 from '@/public/anh-3.jpg';
import anh4 from '@/public/anh-4.jpg';
import anh5 from '@/public/anh-5.jpg';
import anh6 from '@/public/anh-6.jpg';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const images = [anh1, anh2, anh3, anh4, anh5, anh6];

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='relative top-0'>
              <Card>
                <CardContent className='flex items-center justify-center'>
                  <Image
                    src={image}
                    alt={`carousel-image-${index}`}
                    className='object-cover sm:w-full sm:h-[36rem] w-full h-full'
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
