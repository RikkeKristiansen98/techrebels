import React, { createContext, useContext, useEffect, useState } from "react";
import HomeService from "../services/HomeService";
import MainService from "../services/MainService";

const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({
    hero: null,
    promo: null, 
    banner: null,
    carouselItems: [],
    isLoading: true,
    error: null,
    faqData: [],
  });
 

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [homepageSections, faqData] = await Promise.all([
          HomeService.getHomePageWithSections(),
          MainService.getFaqData(),
        ]);

        setHomeData({
          hero: homepageSections.hero,
          promo: homepageSections.promo,
          banner: homepageSections.banner,
          carouselItems: homepageSections.carouselItems,
          faq: faqData, // Lägg till FAQ-data
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching home data:", error);
        setHomeData({
          faq: [],
          hero: null,
          promo: null,
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

