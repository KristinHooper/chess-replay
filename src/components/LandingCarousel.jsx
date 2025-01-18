import React from 'react';
import Carousel from '@/components/ui/carousel/CustomCarousel';
import CarouselContent from '@/components/ui/carousel/CarouselContent';
import CarouselItem from '@/components/ui/carousel/CarouselItem';
import CarouselPrevious from '@/components/ui/carousel/CarouselPrevious';
import CarouselNext from '@/components/ui/carousel/CarouselNext';

const LandingCarousel = () => {
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];

  return (
    <Carousel orientation='vertical' className='h-[500px] relative'>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className='object-cover w-full h-auto'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LandingCarousel;
