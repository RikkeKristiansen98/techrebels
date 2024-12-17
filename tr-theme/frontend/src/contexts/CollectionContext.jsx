import React, { createContext, useContext, useState, useEffect } from "react";
import CollectionService from "../services/CollectionService";

const CollectionContext = createContext();

export const useCollection = () => useContext(CollectionContext);

export const CollectionProvider = ({ children }) => {
  const [collectionData, setCollectionData] = useState({
    GridItems: [], // En lista med dina items
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const result = await CollectionService.getCollection();
        setCollectionData({
          GridItems: result, // Uppdaterar med hämtade items
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setCollectionData({
          GridItems: [],
          isLoading: false,
          error: error.message,
        });
      }
    };
  
    fetchCollectionData();
  }, [setCollectionData]);

  console.log("CollectionProvider state:", collectionData);

  return (
    <CollectionContext.Provider value={collectionData}>
      {children}
    </CollectionContext.Provider>
  );
};
