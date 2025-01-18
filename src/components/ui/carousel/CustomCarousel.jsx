'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const CarouselContext = React.createContext(null);

const CustomCarousel = React.forwardRef(
  (
    {
      orientation = 'horizontal',
      opts,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );

    return (
      <CarouselContext.Provider value={{ carouselRef, api, orientation }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';
export default CustomCarousel;
