import React, { useState, useEffect } from "react";
import MainService from "../../services/MainService";

const GridItem = ({ gridItem, imageCache }) => {
  const [content, setContent] = useState({
    title: gridItem.title || "No title found",
    tagline: gridItem.tagline || "No tagline",
    description: gridItem.description || "No description",
    imageId: gridItem.imageId || "",
    isLoaded: false,
  });

  useEffect(() => {
    const fetchImage = async () => {
      if (!content.imageSrc && gridItem.imageSrc) {
        try {
          const imageSrc = await MainService.getImageById(
            gridItem.imageSrc,
            imageCache
          );
          setContent((prev) => ({
            ...prev,
            imageSrc,
            isLoaded: true,
          }));
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    };

    fetchImage();
  }, [gridItem, imageCache]);

  return (
    <div className="relative group flex flex-col items-center p-4 rounded-lg overflow-hidden">
      {content.isLoaded ? (
        <>
          {/* Bild som skalas upp vid hover */}
          {content.imageSrc && (
            <img
              src={content.imageSrc}
              alt={content.title}
              className="w-80 h-70 rounded-lg transform transition-transform duration-300 group-hover:scale-110"
            />
          )}
          {/* Overlay för tagline och description */}
          <div className="absolute inset-0 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 cursor-pointer ">
            <h3 className="header-1 text-center text-lg font-semibold text-gray-800">
              {content.title}
            </h3>
            <h4 className="header-2 text-center text-md text-gray-600 mt-2">
              {content.tagline}
            </h4>
            <p className="header-3 text-center text-sm text-gray-500 mt-2">
              {content.description}
            </p>
          </div>
        </>
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
          Loading content...
        </div>
      )}
    </div>
  );
};

export default GridItem;