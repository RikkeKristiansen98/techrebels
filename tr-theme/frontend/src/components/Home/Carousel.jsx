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
    <div className="relative w-full mb-[20%] mt-[5%] bg-blueTheme flex justify-center items-center">
      {/* Flex container för text och karusell bredvid varandra */}
      <div className="flex flex-row items-center justify-center w-full space-x-10 mt-[2%] mb-[2%]">
        {/* Karusellen (vänster sida) */}
        <div className="relative w-[60%]">
          <div className="relative p-10 flex transition-all duration-700 ease-in-out gap-7 justify-center">
            {/* Left Button */}
            <button
              className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={prevSlide}
            >
              <img src={leftArrow} alt="left arrow" className="w-6 h-6" />
            </button>

            {/* Loopa igenom de synliga korten och rendera dem */}
            {getVisibleCarouselItems().map((carouselItem, index) => (
              <div
                className={`flex-shrink-0 transition-all duration-500 ${getCarouselItemSize(
                  index
                )}`} // Justera storlek på kort
                key={index}
              >
                <CarouselItem
                  carouselItem={carouselItem}
                  imageCache={imageCache}
                />
              </div>
            ))}

            {/* Right Button */}
            <button
              className="absolute right-[5%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={nextSlide}
            >
              <img src={rightArrow} alt="right arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Rubrik för karusellen (höger sida) */}
        <div className="text-center w-[30%]">
          <h2 className="header-2 text-5xl text-gray-800 mb-6 mt-[2%] border-b-2 pb-4 mx-auto border-gray-800">
            Tech för alla tipsar
          </h2>
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illo, voluptate vitae ullam exercitationem iste error velit deleniti. 
            Fuga nisi illum reiciendis, magnam necessitatibus facere assumenda 
            ducimus eos voluptatem id neque!</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
