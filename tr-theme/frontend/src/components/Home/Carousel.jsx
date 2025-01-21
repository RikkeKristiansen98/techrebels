import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../../images/left-arrow-black.png";
import rightArrow from "../../images/right-arrow-black.png";
import CarouselItem from "./CarouselItem";
import { NavLink } from "react-router-dom";

const Carousel = ({ carouselItems }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const itemsPerSlide = 3;
  const totalItems = carouselItems.length;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getVisibleCarouselItems = () => {
    const visibleCarouselItems = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      visibleCarouselItems.push(carouselItems[(currentIndex + i) % totalItems]);
    }
    return visibleCarouselItems;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full mb-[20%] mt-[5%] flex justify-center items-center">
      {/* Bakgrund med endast opacity på bakgrunden */}
      <div className="absolute inset-0 bg-orangeTheme opacity-30 z-0"></div>{" "}
      {/* Bakgrund med opacity */}
      {/* Flex container för text och karusell bredvid varandra */}
      <div className="flex flex-row items-center justify-center w-full space-x-28 mt-[4%] mb-[4%]">
        {/* Karusellen (vänster sida) */}
        <div className="relative w-[50%] mr-[5%]">
          <div className="relative flex transition-all duration-700 ease-in-out gap-7 justify-center">
            {/* Left Button */}
            <button
              className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={prevSlide}
            >
              <img src={leftArrow} alt="left arrow" className="w-7 h-7" />
            </button>

            {/* Loopa igenom de synliga korten och rendera dem */}
            {getVisibleCarouselItems().map((carouselItem, index) => (
              <CarouselItem
                key={carouselItem.id}
                carouselItem={carouselItem}
                imageCache={imageCache}
              />
            ))}

            {/* Right Button */}
            <button
              className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={nextSlide}
            >
              <img src={rightArrow} alt="right arrow" className="w-7 h-7" />
            </button>
          </div>

          {/* Prickar under karusellen */}
          <div className="flex justify-center mt-6 space-x-4">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-gray-600" // Aktuell bild
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rubrik för karusellen (höger sida) */}
        <div
          ref={sectionRef}
          className={`text-center w-[30%] transition-all duration-700 ease-in-out ${
            isVisible ? "animate-slide-in-right" : "" // Lägg till animation om sektionen är synlig
          } space-y-10`}
        >
          <h2 className="header-2 text-5xl text-gray-800 mb-6 mt-[2%] border-b-2 pb-4 mx-auto border-gray-800">
            Tech för alla tipsar
          </h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptate vitae ullam exercitationem iste error velit deleniti. Fuga
            nisi illum reiciendis, magnam necessitatibus facere assumenda
            ducimus eos voluptatem id neque!
          </p>
          <div className="pt-[5%]">
            <NavLink
              to="/collection-page"
              className="group relative text-3xl font-semibold mx-auto border-gray-800 pb-2"
            >
              Gå till tipsbanken
              {/* Strecket under med animation som slide:ar in när man hovrar över */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
