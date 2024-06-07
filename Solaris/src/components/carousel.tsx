// src/components/Carousel.tsx

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';  // Adicione este arquivo CSS para personalizar os estilos

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
    src: 'https://i.imgur.com/501EIMW.png',
    title: 'Imagem 2',
    description: 'Descrição da imagem 2.',
  },
  {
    src: 'https://placeimg.com/640/480/tech',
    title: 'Imagem 3',
    description: 'Descrição da imagem 3.',
  },
  {
    src: 'https://placeimg.com/640/480/animals',
    title: 'Imagem 4',
    description: 'Descrição da imagem 4.',
  },
];

const CarouselComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto relative ">
      <Carousel
        showArrows={true}
        infiniteLoop={false}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        autoPlay={false}
        interval={5000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none custom-arrow right hidden md:block "
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none custom-arrow left hidden md:block"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const indicatorClass = isSelected ? 'custom-dot selected' : 'custom-dot';
          return (
            <li
              className={`inline-block w-3 h-3 mx-1 rounded-full ${indicatorClass} cursor-pointer`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="h-48 md:h-64 lg:h-80">
            <img src={item.src} alt={`Slide ${index}`} className=" object-contain w-full h-full" />
          </div>
        ))}
      </Carousel>
      <div className="mt-4 text-center ">
        <h3 className="text-lg font-bold">{items[currentSlide].title}</h3>
        <p className="text-sm text-white">{items[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default CarouselComponent;
