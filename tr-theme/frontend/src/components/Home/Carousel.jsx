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

  const carouselBorder = "http://techforalla.se/wp-content/uploads/2025/02/carousel-border-e1739376905245.png";
  const textBorder = "http://techforalla.se/wp-content/uploads/2025/02/element-flowerss-e1739377698139.png"
  // Funktion för att ändra antal bilder beroende på skärmstorlek
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setItemsPerSlide(1); // Visa en bild vid skärmbredd <= 500px
      } else {
        setItemsPerSlide(2); // Visa 3 bilder annars
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
    <div className="relative w-full flex justify-center items-center bg-yellowTheme py-[8%] px-[3%]">
      {/* border  */}
      <img
        src={carouselBorder}
        alt="Tech för alla logo"
        className="absolute top-0 right-0 z-0 w-full h-auto bg-pinkTheme"
      />
      {/* Flex container för text och karusell bredvid varandra */}
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center w-full space-x-0 xl:space-x-28 mt-[4%] mb-[1%]">
        {/* Karusellen (vänster sida) */}
        <div className="flex flex-col items-center justify-center relative xl:w-[40%] xs:mt-[5%] xxs:w-[60%] mr-[5%] xl:mb-[-10%]">
          <div className="relative flex transition-all duration-700 ease-in-out gap-8 justify-center">
            {/* Left Button */}
            <button
              className="absolute xl:left-[-7%] xxs:left-[-25%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={prevSlide}
            >
              <img
                src={leftArrow}
                alt="left arrow"
                className="w-7 h-7"
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
              className="absolute xl:right-[-7%] xxs:right-[-25%] top-1/2 transform -translate-y-1/2 z-20"
              onClick={nextSlide}
            >
              <img
                src={rightArrow}
                alt="right arrow"
                className="w-7 h-7"
              />
            </button>
          </div>

          {/* Prickar under karusellen */}
          <div className="flex justify-center mt-8 xxs:mb-[25%] space-x-4">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index
                    ? "bg-pinkTheme" // Aktuell bild
                    : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Rubrik för karusellen (höger sida) */}
        <div
          ref={sectionRef}
          className={`text-center xl:w-[30%] xxs:w-[85%] space-y-4 bg-pinkTheme border-4 border-blackTheme sm:py-5 md:py-10 xl:px-30 xxs:px-6 xxs:pt-[5%] xl:pt-[2%] shadow-[2px_3px_4px_rgba(0,0,0,0.6)]`} // Här läggs bakgrundsfärg till endast textsektionen
        >
          <h2 className="xxs:text-xl md:text-3xl xl:text-3xl text-whiteTheme font-bold mb-12 drop-shadow-lg">
            Tech för alla tipsar
          </h2>

          <img src={textBorder} alt="" />
          <p className="xl:text-lg xxs:text-lg text-blackTheme">
            Här hittar du tips om allt från de senaste trenderna inom teknologi till enkla steg
            för att komma igång med programmering,
            spelutveckling och mycket mer. Oavsett om du är nybörjare eller redan har några erfarenheter,
            så finns det alltid något nytt att upptäcka och lära sig!
          </p>
          <div className="flex justify-center xl:pt-[5%] xl:pb-[5%] xxs:pb-[10%]">
            <NavLink
              to="/collection-page"
              className="bg-orange-500 border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg px-2 py-2 flex items-center justify-center text-blackTheme xl:text-xl md:text-xl xxs:text-sm font-bold transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90"
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
