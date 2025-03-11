import { fetchWithCache } from "./MainService"; // Importera funktionen för att hämta data med cache-funktionalitet.

const BASE_URL = "https://techforalla.se/wp-json/wp/v2"; // Bas-URL för WordPress API.

const carouselFieldNames = [
  "selected_carousel_item_one",
  "selected_carousel_item_two",
  "selected_carousel_item_three",
  "selected_carousel_item_four",
  "selected_carousel_item_five",
  "selected_carousel_item_six",
]; // Namn på carousel-fälten i ACF som används för att dynamiskt bygga en lista av carousel-items.

const HomeService = {
  // Hjälpfunktion för att skapa en lista av carousel-items från ACF-data.
  createCarouselItems: (acfData) => {
    const items = [];
    for (let i = 1; i <= 6; i++) { // Loopa över 7 möjliga carousel-items.
      const item = acfData[`selected_carousel_item_${i}`]; // Hämta varje item från ACF-data.
      if (item) { // Om item finns, lägg till det i listan.
        items.push(item);
      }
    }
    return items;
  },

  // Funktion för att hämta data för hemsidan (sida med ID 98).
  getHomePage: async () => {
    const url = `${BASE_URL}/pages/98`; // Bygg URL för API-anropet.
    return await fetchWithCache(url); // Anropa API:et och returnera data.
  },

  // Funktion för att hämta hemsidedata inklusive sektionerna hero, promo, banner och carousel.
  getHomePageWithSections: async () => {
    try {
      // Hämta grundläggande hemsidedata.
      const homepageData = await HomeService.getHomePage();

      // Funktion för att extrahera ID från ett ACF-fält.
      const extractId = (field) => (field ? field.ID || field : null);
      // Funktion för att extrahera post-typen, om den inte finns används "default".
      const extractType = (field) => field?.post_type || "default";

      // Extrahera ID för hero, promo och banner från ACF-data.
      const heroId = extractId(homepageData.acf?.selected_hero);
      const promoId = extractId(homepageData.acf?.selected_promo);
      const bannerId = extractId(homepageData.acf?.selected_banner);

      // Skapa en lista av carousel-items genom att extrahera deras ID och typ.
      const carouselItems = carouselFieldNames
        .map((fieldName) => {
          const field = homepageData.acf?.[fieldName]; // Hämta varje carousel-item från ACF-data.
          return field
            ? { id: extractId(field), type: extractType(field) } // Om item finns, extrahera dess ID och typ.
            : null;
        })
        .filter((item) => item); 
        if (!carouselItems || carouselItems.length === 0) {
          console.error("No carousel items found.");
        }

      if (!heroId || !promoId || !bannerId || carouselItems.length === 0) {
        throw new Error(
          "Hero ID, Banner ID, or Carousel Items are missing in ACF data."
        );
      }

      // Parallellt hämta data för hero, promo, banner och carousel-items.
      const [heroData, promoData, bannerData, carouselItemsData] = await Promise.all([
        HomeService.getHeroById(heroId), // Hämta hero-data baserat på ID.
        HomeService.getPromoById(promoId), // Hämta promo-data baserat på ID.
        HomeService.getBannerById(bannerId), // Hämta banner-data baserat på ID.
        HomeService.getCarouselItemsById(carouselItems), // Hämta carousel-items baserat på deras ID och typ.
      ]);

      // Returnera den hämtade datan i ett organiserat objekt.
      return {
        hero: heroData,
        promo: promoData,
        banner: bannerData,
        carouselItems: Array.isArray(carouselItemsData)
          ? carouselItemsData // Om carouselItemsData är en array, returnera den.
          : [], // Annars, returnera en tom array.
      };
    } catch (error) {
     
      console.error("Error fetching homepage sections:", error);
      throw error;
    }
  },

  // Funktion för att hämta hero-data baserat på ID.
  getHeroById: async (heroId) => {
    const url = `${BASE_URL}/hero/${heroId}`; 
    return await fetchWithCache(url); 
  },

  // Funktion för att hämta promo-data baserat på ID.
  getPromoById: async (promoId) => {
    const url = `${BASE_URL}/promo/${promoId}`;
    return await fetchWithCache(url); 
  },

  // Funktion för att hämta banner-data baserat på ID.
  getBannerById: async (bannerId) => {
    const url = `${BASE_URL}/banner/${bannerId}`; 
    return await fetchWithCache(url); 
  },

  // Funktion för att hämta carousel-items baserat på en lista av ID:n och typer.
  getCarouselItemsById: async (carouselItems) => {
    const items = await Promise.all(
      
      carouselItems.map(async ({ id, type }) => {
        const url = `${BASE_URL}/${type}/${id}`;
    
        try {
          return await fetchWithCache(url);
        } catch (error) {
          console.error(`Error fetching ${type} item ${id}:`, error);
          return null;
        }
      })
    );

    // Filtrera bort eventuella null-värden från resultatet och returnera listan.
    return items.filter((item) => item !== null);
  },
};

export default HomeService; 
