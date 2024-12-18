import React, { useState, useEffect } from "react";
import MainService from "../../services/MainService";

const GridItem = ({ gridItem, imageCache }) => {
  const [content, setContent] = useState({
    title: gridItem.title || "No title found",
    tagline: gridItem.tagline || "Unknown author",
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
    <div className="flex flex-col items-center p-4 rounded-lg">
      {content.isLoaded ? (
        <>
          {content.imageSrc && (
            <img
              src={content.imageSrc}
              alt={content.title}
              className="w-60 h-60 rounded-lg"
            />
          )}
          <h3 className="mt-4 text-center text-lg text-gray-700">
            {content.title}
          </h3>
          <h3 className="mt-2 text-center text-md text-gray-700">
            {content.tagline}
          </h3>
          {content.description && (
            <h3 className="mt-2 text-center text-sm text-gray-600">
              {content.description}
            </h3>
          )}
        </>
      ) : (
        <div className="w-full h-54 bg-gray-200 flex items-center justify-center">
          Loading content...
        </div>
      )}
    </div>
  );
};

export default GridItem;
