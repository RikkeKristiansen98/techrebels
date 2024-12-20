import React, { useState } from "react";
import GridItem from "./GridItem";
import { useCollection } from "../../contexts/CollectionContext";

const Grid = () => {
  const [imageCache, setImageCache] = useState({}); // Cache för bilder
  const { allGridItems, loadNextPage, filteredGridItems } = useCollection();
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
    }
  };

  //denna är det meningen att den ska fallbacka på att visa allt i collection om ingenting är i checkat i boxarna. 
  
  const gridItems = filteredGridItems.length > 0 ? filteredGridItems : allGridItems;

  // Skär GridItems baserat på nuvarande sida
  const paginatedItems = gridItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {paginatedItems.map((gridItem) => (
          <GridItem
            key={gridItem.id}
            gridItem={gridItem}
            imageCache={imageCache}
          />
        ))}
      </section>

      {/* Paginering visas bara på stora skärmar */}
      <div className="flex justify-center mt-4 lg:flex xl:flex">
        <button
          onClick={handlePrevPage}
          className={`mr-2 px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={currentPage === 1}
        >
          Föregående
        </button>
        <button
          onClick={handleNextPage}
          className={`ml-2 px-4 py-2 bg-gray-200 rounded ${
            paginatedItems.length < itemsPerPage
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={paginatedItems.length < itemsPerPage}
        >
          Nästa
        </button>
      </div>
    </div>
  );
};

export default Grid;
