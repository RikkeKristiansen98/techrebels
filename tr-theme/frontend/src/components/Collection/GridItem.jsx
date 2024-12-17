import React, { useState, useEffect } from "react";
import { useCollection } from "../../contexts/CollectionContext";
import MainService from "../../services/MainService";

const GridItem = ({ id }) => {
  const { GridItems } = useCollection();
  const item = GridItems.find((gridItem) => gridItem.id === id);
  const [content, setContent] = useState({
    title: item?.title || "",
    imageSrc: item?.imageSrc || "",
    isLoaded: !!item?.imageSrc,
  });


  useEffect(() => {
    const fetchContent = async () => {
      if (!content.isLoaded && item?.acf?.imageSrc) {
        
        const imageId = findDynamicField(item.acf, "image");
      
        if (imageId) {
          try {
            const imageSrc = await MainService.getImageById(imageId);
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

  console.log("Found imageSrc:", item.imageSrc); 
  console.log("GridItem content:", content);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg">
      {content.isLoaded ? (
        <>
          <img
            src={content.imageSrc}
            alt={content.title}
            className="w-60 h-60 rounded-lg"
          />
          <h3 className="mt-4 text-center text-lg">{content.title}</h3>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GridItem;
