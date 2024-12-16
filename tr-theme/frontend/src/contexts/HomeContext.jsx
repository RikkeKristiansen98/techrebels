import React, { createContext, useContext, useEffect, useState } from "react";
import HomeService from "../services/HomeService";

const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    hero: null,
    banner: null,
    carouselItems: [],
    isLoading: true,
    error: null,
  });
  
  const imageCache = {}; // Bildcache för att återanvända bilder

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const result = await HomeService.getHomePageWithSections();

        // Hämta bilder för carousel items
        const carouselItemsWithImages = await HomeService.getCarouselImages(result.carouselItems, imageCache);

        setHomeData({
          hero: result.hero,
          banner: result.banner,
          carouselItems: carouselItemsWithImages,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching home data:", error);
        setHomeData({
          hero: null,
          banner: null,
          carouselItems: [],
          isLoading: false,
          error: "Failed to load homepage data.",
        });
      }
    };

    fetchHomeData();
  }, []);

  return (
    <HomeContext.Provider value={homeData}>
      {children}
    </HomeContext.Provider>
  );
};
