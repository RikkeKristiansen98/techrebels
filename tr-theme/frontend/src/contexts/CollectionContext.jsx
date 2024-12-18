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
      const result = await CollectionService.fetchCollection(
        page,
        itemsPerPage
      );
      setAllGridItems((prevData) => ({
        GridItems: [...prevData.GridItems, ...result], // Lägg till nya böcker i listan
        isLoading: false,
        error: null,
      }));
      setFilteredGridItems(result);
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
      const categoriesWithChildren =
        await CollectionService.fetchAllCategoriesWithChildren();
      setCategories(categoriesWithChildren); // Uppdatera state med parent och children
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Implementera filterCollection
  const filterCollection = ({ categories: selectedCategories }) => {
    if (!selectedCategories || selectedCategories.length === 0) {
      setFilteredGridItems(allGridItems.GridItems); // Visa alla om inga filter är aktiva
    } else {
      const filtered = allGridItems.GridItems.filter((item) =>
        selectedCategories.some(
          (categorySlug) => item.categories?.includes(categorySlug) // Matcha mot valda kategorier
        )
      );
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

  return (
    <CollectionContext.Provider
      value={{
        ...allGridItems,
        loadNextPage,
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
