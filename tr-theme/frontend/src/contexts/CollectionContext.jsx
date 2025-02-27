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
      
      // Här flyttar vi mappningen av objekt till Context
      const mappedResult = result.map((item) => ({
        id: item.id,
        title: item.acf?.collection_item_title || "No Title",
        tagline: item.acf?.collection_item_tagline || "No Tagline",
        description: item.acf?.collection_item_description || "No description",
        categories: item.categories || [],
        imageSrc: item.acf?.collection_item_image || null,
        url: item.acf?.collection_item_url || "#",
        slug: item.slug,
      }));

      setAllGridItems({
        GridItems: mappedResult, // Replace with the new items (do not append)
        isLoading: false,
        error: null,
      });
      setFilteredGridItems(mappedResult); // Update the filtered items too
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
      const allCategories = await CollectionService.fetchAllCategoriesWithChildren();

      // Flytta även logiken för att mappa parent- och child-kategorier hit
      const parentCategories = allCategories.filter((category) =>
        ["ages", "areas", "topics"].includes(category.slug)
      );

      const categoriesWithChildren = parentCategories.map((parent) => {
        const children = allCategories.filter((category) => category.parent === parent.id);
        return {
          ...parent,
          children,
        };
      });

      setCategories(categoriesWithChildren); // Uppdatera state med parent och children
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Implementera filterCollection
  const filterCollection = ({ categories: selectedCategories }) => {
    if (!selectedCategories || selectedCategories.length === 0) {
      setFilteredGridItems(allGridItems.GridItems);
    } else {
      const selectedCategoryIds = [];

      categories.forEach((parent) => {
        if (selectedCategories.includes(parent.slug)) {
          selectedCategoryIds.push(parent.id);
          parent.children.forEach((child) => {
            if (selectedCategories.includes(child.slug)) {
              selectedCategoryIds.push(child.id);
            }
          });
        } else {
          parent.children.forEach((child) => {
            if (selectedCategories.includes(child.slug)) {
              selectedCategoryIds.push(child.id);
            }
          });
        }
      });

      const filtered = allGridItems.GridItems.filter((item) =>
        item.categories.some((catId) => selectedCategoryIds.includes(catId))
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
