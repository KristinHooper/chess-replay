import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from './CustomCarousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext, orientation } =
    useContext(CarouselContext);

  return (
    <Button
      ref={ref}
      className={`absolute ${
        orientation === 'horizontal'
          ? '-right-12 top-1/2'
          : '-bottom-12 left-1/2'
      } ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className='h-4 w-4' />
      <span className='sr-only'>Next slide</span>
    </Button>
  );
});

CarouselNext.displayName = 'CarouselNext';
export default CarouselNext;
