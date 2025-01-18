import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from './CustomCarousel';

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useContext(CarouselContext);

  return (
    <div
      ref={carouselRef}
      className={`overflow-hidden ${className}`}
      {...props}
    >
      <div ref={ref} className='flex'>
        {props.children}
      </div>
    </div>
  );
});

CarouselContent.displayName = 'CarouselContent';
export default CarouselContent;
