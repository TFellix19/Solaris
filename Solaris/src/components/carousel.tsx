// src/components/Carousel.tsx

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselItem {
  src: string;
  title: string;
  description: string;
}

const items: CarouselItem[] = [
  {
    src: 'https://i.imgur.com/Ygpa0En.png',
    title: 'Imagem 1',
    description: 'Descrição da imagem 1.',
  },
  {
    src: 'https://i.imgur.com/Ygpa0En.png',
    title: 'Imagem 2',
    description: 'Descrição da imagem 2.',
  },
  {
    src: 'https://i.imgur.com/Ygpa0En.png',
    title: 'Imagem 3',
    description: 'Descrição da imagem 3.',
  }
];

const CarouselComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel
        showArrows={true}
        infiniteLoop={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {items.map((item, index) => (
          <div key={index} className="h-48 md:h-64 lg:h-80">
            <img src={item.src} alt={`Slide ${index}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </Carousel>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold">{items[currentSlide].title}</h3>
        <p className="text-sm text-white">{items[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default CarouselComponent;


