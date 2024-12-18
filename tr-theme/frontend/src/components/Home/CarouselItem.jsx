import React, { useEffect, useState } from "react";
import MainService from "../../services/MainService";

const CarouselItem = ({ carouselItem, imageCache }) => {
  const [content, setContent] = useState({
    title: "",
    imageSrc: "",
    isLoaded: false,
  });

  // Hämta både title och bild och sätt in i state när båda är färdiga
  useEffect(() => {
    const fetchContent = async () => {
      const title =
        MainService.findDynamicField(carouselItem.acf, "title") ||
        "Title could not be found";
      const imageId = MainService.findDynamicField(carouselItem.acf, "image");

      if (imageId) {
        try {
          // Försök att hämta bilden från cache om den finns där
          const imageSrc = await MainService.getImageById(imageId, imageCache);

          setContent({
            title,
            imageSrc,
            isLoaded: true, 
          });
        } catch (error) {
          console.error("Error fetching content:", error);
        }
      }
    };

    fetchContent();
  }, [carouselItem, imageCache]);

  console.log("CarouselItem content:", carouselItem, "content:", content);

  return (
    <div className="w-full h-54 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group">
      {/* Visa en laddningsindikator tills båda är inladdade */}
      {content.isLoaded ? (
        <>
          {/* Bild */}
          <img
            src={content.imageSrc}
            alt="Carousel Item"
            className="w-full h-54 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
          {/* Header */}
          <h2 className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {content.title}
          </h2>
        </>
      ) : (
        <div className="w-full h-54 bg-gray-200 flex items-center justify-center">
          Loading content...
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
