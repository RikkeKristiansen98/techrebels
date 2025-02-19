import React, { useState } from "react";
import GridItem from "./GridItem";
import { useCollection } from "../../contexts/CollectionContext";

const Grid = () => {
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const { allGridItems, loadNextPage, loadPrevPage, filteredGridItems } =
    useCollection();
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  // Hanterar sidbyte (framåt och bakåt)
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    loadNextPage(); // Hämta nästa sida med böcker
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      loadPrevPage();
    }
  };

  //denna är det meningen att den ska fallbacka på att visa allt i collection om ingenting är i checkat i boxarna.

  const gridItems =
    filteredGridItems.length > 0 ? filteredGridItems : allGridItems;


  return (
    <div className="bg-whiteTheme border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]">
      <section className="grid grid-cols-1 gap-4 xxs:grid-col-1 sm:grid-cols-2 lg:grid-cols-3 lg:min-w-[1000px] xl:grid-cols-4 p-4">
        {gridItems.map((gridItem, index) => (
          <GridItem
          key={`${gridItem.id}-${index}`}
            gridItem={gridItem}
            imageCache={imageCache}
          />
        ))}
      </section>

      {/* Paginering visas bara på stora skärmar */}
      <div className="flex justify-center mt-10 m-10 lg:flex xl:flex">
        <button
          onClick={handlePrevPage}
          className={`mr-2 px-4 py-2 bg-gray-200 rounded shadow-[4px_4px_3px_rgba(0,0,0,0.6)]${
            currentPage === 1
              ? "cursor-not-allowed opacity-50 shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
              : ""
          }`}
          disabled={currentPage === 1}
        >
          Föregående
        </button>
        <button
          onClick={handleNextPage}
          className={`ml-2 px-4 py-2 bg-orangeTheme rounded shadow-[4px_4px_3px_rgba(0,0,0,0.6)]${
            gridItems.length < itemsPerPage
              ? "cursor-not-allowed opacity-50 shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
              : ""
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
