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
 

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const result = await HomeService.getHomePageWithSections();
        setHomeData({
          hero: result.hero,
          banner: result.banner,
          carouselItems: result.carouselItems,
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

