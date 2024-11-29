import React, { useState } from "react";
import leftArrow from "../../images/left-arrow-black.png";
import rightArrow from "../../images/right-arrow-black.png";
import element from "../../images/sideelemetn-2.png";
import CarouselCard from "./CarouselCard";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4; // Antal kort som ska visas samtidigt
  const totalItems = cards.length;

  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerSlide) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* Background image under carousel
      <img
        src={element}
        alt="background element"
        className="absolute top-20 left-10 h-full object-cover z-0 w-40"
      /> */}

      {/* Carousel content */}
      <div className="relative z-10">
        <h2 className="header-2 text-3xl text-black text-center mb-6">
          Tech för alla tipsar
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20"
            onClick={prevSlide}
          >
            <img src={leftArrow} alt="left arrow" className="w-6 h-6" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden relative p-10">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {cards.map((card, index) => (
                <div className="flex-shrink-0 w-1/4" key={index}>
                  <CarouselCard card={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-20"
            onClick={nextSlide}
          >
            <img src={rightArrow} alt="right arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
