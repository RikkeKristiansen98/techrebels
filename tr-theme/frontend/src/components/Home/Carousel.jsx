import React, { useEffect, useState, useRef } from "react";
import leftArrow from "../../images/left-arrow-black.png";
import rightArrow from "../../images/right-arrow-black.png";
import CarouselItem from "./CarouselItem";
import { NavLink } from "react-router-dom";

const Carousel = ({ carouselItems }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const totalItems = carouselItems.length;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  // Funktion för att ändra antal bilder beroende på skärmstorlek
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setItemsPerSlide(1); // Visa en bild vid skärmbredd <= 500px
      } else {
        setItemsPerSlide(3); // Visa 3 bilder annars
      }
    };

    // Kör funktionen när komponenten mountas och vid varje resize-event
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="absolute inset-0 bg-purpleTheme  z-0"></div>{" "}
      {/* Bakgrund med opacity */}
      {/* Flex container för text och karusell bredvid varandra */}
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center w-full space-x-0 xl:space-x-28 mt-[4%] mb-[1%]">
        {/* Karusellen (vänster sida) */}
        <div className="relative xl:w-[50%] xxs:w-[60%] mr-[5%] xl:mb-[-10%]">
          <div className="relative flex transition-all duration-700 ease-in-out gap-7 justify-center">
            {/* Left Button */}
            <button
              className="absolute xl:left-[-5%] xxs:left-[-25%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={prevSlide}
            >
              <img
                src={leftArrow}
                alt="left arrow"
                className="w-7 h-7 invert"
              />
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
              className="absolute xl:right-[-5%] xxs:right-[-25%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={nextSlide}
            >
              <img
                src={rightArrow}
                alt="right arrow"
                className="w-7 h-7 invert"
              />
            </button>
          </div>

          {/* Prickar under karusellen */}
          <div className="flex justify-center mt-8 xxs:mb-[25%] space-x-4">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-gray-700" // Aktuell bild
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rubrik för karusellen (höger sida) */}
        <div
          ref={sectionRef}
          className={`text-center xl:w-[30%] xxs:w-[70%] transition-all duration-700 ease-in-out ${
            isVisible ? "animate-slide-in-right" : "" // Lägg till animation om sektionen är synlig
          } space-y-10`}
        >
          <h2 className="header-2 xxs:text-2xl xl:text-5xl text-white xl:mt-[8%] border-b-2 pb-4 mx-auto border-white">
            Tech för alla tipsar
          </h2>
          <p className="xl:text-2xl xxs:text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            voluptate vitae ullam exercitationem iste error velit deleniti. Fuga
            nisi illum reiciendis, magnam necessitatibus facere assumenda
            ducimus eos voluptatem id neque!
          </p>
          <div className="xl:pt-[5%] xxs:pb-[35%]">
            <NavLink
              to="/collection-page"
              className="xl:text-3xl xxs:text-xl font-semibold text-white"
            >
              Gå till tipsbanken
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
