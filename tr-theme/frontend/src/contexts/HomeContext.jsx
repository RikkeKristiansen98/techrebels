import React, { createContext, useContext, useEffect, useState } from "react";
import HomeService from "../services/HomeService";
import MainService from "../services/MainService";

// Skapa ett HomeContext som ska användas för att dela hemside-datan i hela applikationen.
const HomeContext = createContext();

// Hook för att enkelt komma åt HomeContext i andra komponenter.
export const useHome = () => useContext(HomeContext);

// HomeProvider-komponenten tillhandahåller kontexten för hemsidedatan till sina barn-komponenter.
export const HomeProvider = ({ children }) => {
  // State för att lagra hemsidedatan (hero, promo, banner, carouselItems, etc.)
  const [homeData, setHomeData] = useState({
    hero: null, // Hero-sektionen.
    promo: null, // Promo-sektionen.
    banner: null, // Banner-sektionen.
    carouselItems: [], // Carousel-items.
    isLoading: true, // Laddningsindikator för att veta om data fortfarande hämtas.
    error: null, // Felmeddelande vid eventuellt fel under hämtning.
    faqData: [], // FAQ-sektionen som ska hämtas från MainService.
  });

  // useEffect hook används för att hämta hemsidedatan när komponenten mountas.
  useEffect(() => {
    // Asynkron funktion som hämtar hemsidedata och FAQ-data parallellt.
    const fetchHomeData = async () => {
      try {
        // Parallellt anropa för att hämta både hemsidans sektioner och FAQ-data.
        const [homepageSections, faqData] = await Promise.all([
          HomeService.getHomePageWithSections(), // Hämta hero, promo, banner och carousel-items.
          MainService.getFaqData(), // Hämta FAQ-data.
        ]);

        // Om hämtningen lyckas, uppdatera state med den hämtade datan.
        setHomeData({
          hero: homepageSections.hero, 
          promo: homepageSections.promo, 
          banner: homepageSections.banner,
          carouselItems: homepageSections.carouselItems, 
          faq: faqData, 
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

    // Kör funktionen för att hämta data.
    fetchHomeData();
  }, []); // Tom beroendelista innebär att detta bara körs en gång vid komponentens första rendering (mount).

  // Returnerar en Provider som delar med sig av hemsidedatan (homeData) till barn-komponenterna.
  return (
    <HomeContext.Provider value={homeData}>
      {children} {/* Renderar alla barn-komponenter som behöver tillgång till hemside-datan. */}
    </HomeContext.Provider>
  );
};
