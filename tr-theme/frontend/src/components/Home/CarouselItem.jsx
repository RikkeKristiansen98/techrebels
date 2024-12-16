import React, { useEffect, useState } from "react";

const CarouselItem = ({ carouselItem, imageCache }) => {
  const [content, setContent] = useState({
    header: "",
    imageSrc: "",
    isLoaded: false,
  });

  // Dynamisk funktion för att hitta rätt fält från ACF
  const findDynamicField = (acf, fieldType) => {
    const fieldKey = Object.keys(acf || {}).find((key) =>
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    return fieldKey ? acf[fieldKey] : null;
  };

  // Funktion för att hämta bildens URL via dess ID.
  // I WordPress sparas ofta bilder som "media" inlägg, och när vi hämtar data från en post (t.ex. via ACF) kan bilder refereras till via ett ID istället för en URL.
  // Denna funktion tar emot bildens ID, gör en fetch-förfrågan till WordPress REST API för att hämta den faktiska URL:n till bilden (source_url).
  // Bildens URL cachas i imageCache för att undvika onödiga upprepade anrop, vilket förbättrar prestandan.
  // Om bilden redan finns i cache (imageCache[imageId]), returneras den direkt utan att behöva göra en ny fetch-förfrågan.
  // Funktionen returnerar den hämtade bildens URL eller en tom sträng om något går fel under hämtningen.
  const getImageById = async (imageId) => {
    if (imageCache[imageId]) {
      return imageCache[imageId];
    }

    try {
      const response = await fetch(
        `https://techforalla.se/wp-json/wp/v2/media/${imageId}`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const data = await response.json();
      const imageUrl = data.source_url;
      imageCache[imageId] = imageUrl; // Cache the image URL
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return "";
    }
  };

  // Hämta både header och bild och sätt in i state när båda är färdiga
  useEffect(() => {
    const fetchContent = async () => {
      const header =
        findDynamicField(carouselItem.acf, "header") ||
        "Header could not be found";
      const imageId = findDynamicField(carouselItem.acf, "image");

      if (imageId) {
        try {
          // Försök att hämta bilden från cache om den finns där
          const imageSrc = await getImageById(imageId);

          setContent({
            header,
            imageSrc,
            isLoaded: true, // Sätt detta till true när både är laddade
          });
        } catch (error) {
          console.error("Error fetching content:", error);
        }
      }
    };

    fetchContent();
  }, [carouselItem, imageCache]);

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
            {content.header}
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
