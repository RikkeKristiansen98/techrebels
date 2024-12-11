import React, { useEffect, useState } from "react";

const CarouselItem = ({ carouselItem }) => {
  const [imageSrc, setImageSrc] = useState("");

  // Dynamisk funktion för att hitta rätt värde
  const findDynamicField = (acf, fieldType) => {
    const fieldKey = Object.keys(acf || {}).find((key) =>
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    return fieldKey ? acf[fieldKey] : null;
  };

  // Funktion för att hämta bild via ID
  const getImageById = async (imageId) => {
    try {
      const response = await fetch(`https://techforalla.se/wp-json/wp/v2/media/${imageId}`); // Ersätt BASE_URL med din API-url
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const data = await response.json();
      return data.source_url; // Returnerar URL för bilden
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return ""; // Returnera en tom sträng vid fel
    }
  };

  // Hitta header och image ID
  const header = findDynamicField(carouselItem.acf, "header") || "Header could not be found";
  const imageId = findDynamicField(carouselItem.acf, "image");

  // Hämta bilden när komponenten mountas
  useEffect(() => {
    const fetchImage = async () => {
      if (imageId) {
        const imageUrl = await getImageById(imageId);
        setImageSrc(imageUrl); // Sätt state med den hämtade bilden
      }
    };
    fetchImage();
  }, [imageId]);

  return (
    <div className="w-full h-54 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group">
      {/* Bild */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Carousel Item"
          className="w-full h-54 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-54 bg-gray-200 flex items-center justify-center">
          Loading image...
        </div>
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      {/* Header */}
      <h2 className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {header}
      </h2>
    </div>
  );
};

export default CarouselItem;
