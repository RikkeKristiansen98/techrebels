import React, { createContext, useContext, useState, useEffect } from "react";
import CollectionService from "../services/CollectionService";


const CollectionContext = createContext();


export const useCollection = () => useContext(CollectionContext);


export const CollectionProvider = ({ children }) => {

  const [allGridItems, setAllGridItems] = useState({
    GridItems: [], 
    isLoading: true, 
    error: null, 
  });

  const [page, setPage] = useState(1);
  

  const itemsPerPage = 16;

  
  const [filteredGridItems, setFilteredGridItems] = useState([]);

 
  const [categories, setCategories] = useState([]);

  // Funktion för att hämta kollektionen baserat på den aktuella sidan
  const getCollection = async (page = 1) => {
    try {
 
      const result = await CollectionService.fetchCollection(page, itemsPerPage);
      
      // Mappa API-resultatet till ett mer användarvänligt format
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
        GridItems: mappedResult,
        isLoading: false,
        error: null,
      });

   
      setFilteredGridItems(mappedResult);
    } catch (error) {
      
      setAllGridItems({
        GridItems: [],
        isLoading: false,
        error: error.message,
      });
    }
  };
  
  // Funktion för att hämta alla kategorier inklusive deras barnkategorier
  const getCategories = async () => {
    try {
   
      const allCategories = await CollectionService.fetchAllCategoriesWithChildren();

      const parentCategories = allCategories.filter((category) =>
        ["ages", "areas", "topics"].includes(category.slug)
      );

      // För varje föräldrakategori, hitta dess barnkategorier
      const categoriesWithChildren = parentCategories.map((parent) => {
        const children = allCategories.filter((category) => category.parent === parent.id);
        return {
          ...parent,
          children,
        };
      });

   
      setCategories(categoriesWithChildren);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Funktion för att filtrera kollektionen baserat på valda kategorier
  const filterCollection = ({ categories: selectedCategories }) => {
    if (!selectedCategories || selectedCategories.length === 0) {
      setFilteredGridItems(allGridItems.GridItems);
    } else {
      const selectedCategoryIds = [];

      // Hitta valda kategorier bland både föräldrar och barn
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

      // Filtrera grid-items baserat på matchande kategorier
      const filtered = allGridItems.GridItems.filter((item) =>
        item.categories.some((catId) => selectedCategoryIds.includes(catId))
      );

    
      setFilteredGridItems(filtered);
    }
  };

  // useEffect för att hämta data när komponenten laddas eller när sidan ändras
  useEffect(() => {
    getCollection(page);
    getCategories();
  }, [page]);

  // Funktion för att ladda nästa sida
  const loadNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  // Funktion för att ladda föregående sida, om det är möjligt
  const loadPrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  // Returnerar en Provider som delar med sig av kollektionsdata till barnkomponenterna
  return (
    <CollectionContext.Provider
      value={{
        ...allGridItems,
        loadNextPage, // Funktion för att ladda nästa sida
        loadPrevPage, // Funktion för att ladda föregående sida
        allGridItems: allGridItems.GridItems, // Alla grid-items
        filteredGridItems, // Filtrerade grid-items
        isLoading: allGridItems.isLoading, // Laddningsstatus
        error: allGridItems.error, // Eventuellt felmeddelande
        categories, // Alla kategorier med barn
        filterCollection, // Filtreringsfunktion
      }}
    >
      {children} {/* Renderar alla barnkomponenter */}
    </CollectionContext.Provider>
  );
};