import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from './CustomCarousel';
import { Button } from '@/components/ui/button'; // Assuming a reusable button component
import { ArrowLeft } from 'lucide-react'; // Icon for the button

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev, orientation } =
    useContext(CarouselContext);

  return (
    <Button
      ref={ref}
      className={`absolute ${
        orientation === 'horizontal' ? '-left-12 top-1/2' : '-top-12 left-1/2'
      } ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className='h-4 w-4' />
      <span className='sr-only'>Previous slide</span>
    </Button>
  );
});

CarouselPrevious.displayName = 'CarouselPrevious';
export default CarouselPrevious;
