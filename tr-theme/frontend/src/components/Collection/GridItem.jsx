import React, { useState, useEffect } from "react";
import { useCollection } from "../../contexts/CollectionContext";
import MainService from "../../services/MainService";

const GridItem = ({ id }) => {
  const { GridItems } = useCollection();
  const item = GridItems.find((gridItem) => gridItem.id === id);

  const [content, setContent] = useState({
    title: item?.title || "",
    author: item?.author || "",
    imageSrc: item?.imageSrc || "",
    isLoaded: !!item?.imageSrc,
  });

  useEffect(() => {
    const fetchContent = async () => {
      if (content.isLoaded && item?.acf?.imageSrc) {
        // Hämta imageId från ACF-fältet

        const imageId = findDynamicField(item.acf, "image"); // Hitta bild-ID

       

        if (imageId) {
          try {
            
            // Anropa MainService för att hämta bildens URL via ID
            const imageSrc = await MainService.getImageById(
              imageId,
              imageCache
            );

            // Logga bildens URL för att kontrollera att vi får rätt URL
            console.log("Fetched imageSrc:", imageSrc);
            // Uppdatera state när bilden har hämtats
            setContent((prev) => ({
              ...prev,
              imageSrc,
              isLoaded: true,
            }));
          } catch (error) {
            console.error("Error fetching image:", error);
          }
        }
      }
    };

    fetchContent();
  }, [item, content.isLoaded]);

  if (!item) return null;

  // Logga vad som händer med content och bildens URL
  console.log("GridItem content:", content);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg">
      {content.isLoaded ? (
        <>
          <img
            src={content.imageSrc} // Bildens URL
            alt={content.title}
            className="w-60 h-60 rounded-lg"
          />
          <h3 className="mt-4 text-center text-lg">{content.title}</h3>
          <h3 className="mt-4 text-center text-lg">{content.author}</h3>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GridItem;
