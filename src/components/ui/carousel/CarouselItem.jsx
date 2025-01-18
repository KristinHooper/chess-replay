import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from './CustomCarousel';

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useContext(CarouselContext);

  return (
    <div
      ref={ref}
      role='group'
      aria-roledescription='slide'
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === 'horizontal' ? 'pl-4' : 'pt-4'
      } ${className}`}
      {...props}
    />
  );
});

CarouselItem.displayName = 'CarouselItem';
export default CarouselItem;
