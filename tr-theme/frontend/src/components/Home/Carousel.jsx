import React, { useState } from "react";
import leftArrow from "../../images/left-arrow-black.png";
import rightArrow from "../../images/right-arrow-black.png";
import CarouselItem from "./CarouselItem";

const Carousel = ({ carouselItems }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const itemsPerSlide = 3;
  const totalItems = carouselItems.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getCarouselItemSize = (index) => {
    const middleIndex = Math.floor(itemsPerSlide / 2); 
    const relativeIndex = (index + totalItems) % totalItems; 

    if (relativeIndex === middleIndex) {
      return "w-[30%] scale-110"; // Större kort i mitten
    } else {
      return "w-[25%] scale-90"; // Mindre kort på sidorna
    }
  };

  const getVisibleCarouselItems = () => {
    const visibleCarouselItems = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visibleCarouselItems.push(carouselItems[(currentIndex + i) % totalItems]);
    }
    return visibleCarouselItems;
  };
 
  return (
    <div className="relative w-full"> {/* Container för hela karusellen */}
      <div className="relative z-10">
        <h2 className="header-2 text-3xl text-black text-center mb-6 mt-[10%]">
          Tech för alla tipsar {/* Rubrik för karusellen */}
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 ml-[10%]"
            onClick={prevSlide} 
          >
            <img src={leftArrow} alt="left arrow" className="w-6 h-6" />
          </button>

          {/* Carousel container */}
          <div className="relative p-10 mb-[15%] m-[5%]">
            <div className="flex transition-all duration-700 ease-in-out gap-7 justify-center"
            >
              {/* Loopa igenom de synliga korten och rendera dem */}
              {getVisibleCarouselItems().map((carouselItem, index) => (
                <div
                  className={`flex-shrink-0 transition-all duration-500 ${getCarouselItemSize(index)}`} // Justera storlek på kort
                  key={index} 
                >
                  <CarouselItem carouselItem={carouselItem} imageCache={imageCache} /> {/* Rendera CarouselItem för varje kort */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-20 mr-[10%]"
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




