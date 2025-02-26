import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import { useCollection } from "../../contexts/CollectionContext";

const Grid = () => {
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const { allGridItems, loadNextPage, loadPrevPage, filteredGridItems } = useCollection();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16); // Standardvärde

  // Anpassa antal objekt per sida beroende på skärmstorlek
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 480) {
        setItemsPerPage(6); // Visa 6 objekt på xxs
      } else if (window.innerWidth < 768) {
        setItemsPerPage(12); // Visa 12 objekt på små/mellan skärmar
      } else {
        setItemsPerPage(16); // Standard 16 objekt på större skärmar
      }
    };

    updateItemsPerPage(); // Sätt rätt antal vid första renderingen
    window.addEventListener("resize", updateItemsPerPage); // Uppdatera vid fönsterstorlekändring

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  // Hanterar sidbyte (framåt och bakåt)
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    loadNextPage(); 
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      loadPrevPage();
    }
  };

  // Fallback: Om inget är filtrerat, visa alla
  const gridItems = filteredGridItems.length > 0 ? filteredGridItems : allGridItems;

  return (
    <div className="bg-whiteTheme border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6) ]">
      <section
        className="grid grid-cols-1 gap-4 
                   xxs:grid-cols-1 xs:grid-cols-2
                   sm:grid-cols-2 md:grid-cols-3 
                   lg:grid-cols-4 p-4 max-w-[1000px] mx-auto"
      >
        {gridItems.slice(0, itemsPerPage).map((gridItem, index) => (
          <GridItem key={`${gridItem.id}-${index}`} gridItem={gridItem} imageCache={imageCache} />
        ))}
      </section>

      {/* Paginering */}
      <div className="flex justify-center mt-10 m-10 xxs:flex-col xxs:items-center xxs:gap-1">
        <button
          onClick={handlePrevPage}
          className={`shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg mr-2 px-4 py-2 bg-gray-200 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={currentPage === 1}
        >
          Föregående
        </button>
        <button
          onClick={handleNextPage}
          className={`border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg ml-2 px-4 py-2 bg-orangeTheme ${
            gridItems.length < itemsPerPage ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={gridItems.length < itemsPerPage}
        >
          Nästa
        </button>
      </div>
    </div>
  );
};

export default Grid;
