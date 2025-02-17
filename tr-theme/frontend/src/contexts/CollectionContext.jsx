import React, { createContext, useContext, useState, useEffect } from "react";
import CollectionService from "../services/CollectionService";

const CollectionContext = createContext();

export const useCollection = () => useContext(CollectionContext);

export const CollectionProvider = ({ children }) => {
  const [allGridItems, setAllGridItems] = useState({
    GridItems: [], // Dina böcker
    isLoading: true,
    error: null,
  });

  const [page, setPage] = useState(1); // För att hålla reda på aktuell sida
  const itemsPerPage = 16; // Hur många objekt som visas per sida
  const [filteredGridItems, setFilteredGridItems] = useState([]);
  const [categories, setCategories] = useState([]); // För kategorier

  const getCollection = async (page = 1) => {
    try {
      const result = await CollectionService.fetchCollection(page, itemsPerPage);
      setAllGridItems({
        GridItems: result, // Replace with the new items (do not append)
        isLoading: false,
        error: null,
      });
      setFilteredGridItems(result); // Update the filtered items too
    } catch (error) {
      setAllGridItems({
        GridItems: [],
        isLoading: false,
        error: error.message,
      });
    }
  };
  
  const getCategories = async () => {
    try {
      const categoriesWithChildren = await CollectionService.fetchAllCategoriesWithChildren();
      console.log("Fetched categories:", categoriesWithChildren);
      
      setCategories(categoriesWithChildren); // Uppdatera state med parent och children
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  

  // Implementera filterCollection
  const filterCollection = ({ categories: selectedCategories }) => {
    console.log(
      "Filtering with selected categories (slugs):",
      selectedCategories
    );

    if (!selectedCategories || selectedCategories.length === 0) {
      console.log("No categories selected, showing all items.");
      setFilteredGridItems(allGridItems.GridItems);
    } else {
      // Slå upp ID:n för valda kategorier baserat på deras slug
      const selectedCategoryIds = [];

      // Hitta rätt ID:n för både parent- och underkategorier
      categories.forEach((parent) => {
        if (selectedCategories.includes(parent.slug)) {
          selectedCategoryIds.push(parent.id);

          // Inkludera alla barnkategorier
          parent.children.forEach((child) => {
            if (selectedCategories.includes(child.slug)) {
              selectedCategoryIds.push(child.id);
            }
          });
        } else {
          // Om enbart ett barns slug är valt, lägg till dess ID
          parent.children.forEach((child) => {
            if (selectedCategories.includes(child.slug)) {
              selectedCategoryIds.push(child.id);
            }
          });
        }
      });

      console.log("Selected category IDs:", selectedCategoryIds);

      // Filtrera objekt som har en kategori som matchar något av de valda ID:na
      const filtered = allGridItems.GridItems.filter((item) =>
        item.categories.some((catId) => selectedCategoryIds.includes(catId))
      );

      console.log("Filtered items:", filtered);
      setFilteredGridItems(filtered);
    }
  };


  useEffect(() => {
    getCollection(page);
    getCategories(); // Hämtar rätt sida av data när "page" ändras
  }, [page]);

  const loadNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Ladda nästa sida
  };
  
  const loadPrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage -1);
    }
  };

  return (
    <CollectionContext.Provider
      value={{
        ...allGridItems,
        loadNextPage,
        loadPrevPage,
        allGridItems: allGridItems.GridItems,
        filteredGridItems,
        isLoading: allGridItems.isLoading,
        error: allGridItems.error,
        categories, // Exponera kategorier
        filterCollection, // Exponera filterfunktionen
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
