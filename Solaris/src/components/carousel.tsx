
// src/components/Carousel.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://i.imgur.com/Ygpa0En.png',
  'https://i.imgur.com/Ygpa0En.png',
  'https://placeimg.com/640/480/tech',
  'https://placeimg.com/640/480/animals',
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      swipeable={true}
      emulateTouch={true}
      dynamicHeight={false}
      className="w-full max-w-screen-xl mx-auto"
    >
      {images.map((image, index) => (
        <div key={index} className="h-64 md:h-96 lg:h-128">
          <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
