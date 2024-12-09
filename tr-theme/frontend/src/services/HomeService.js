const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const HomeService = {
  // Funktion för att hämta homepage-data
  getHomePage: async () => {
    try {
      const response = await fetch(`${BASE_URL}/pages/98`);
      if (!response.ok) {
        throw new Error(`Failed to fetch homepage: ${response.statusText}`);
      }
      const data = await response.json(); // Parse JSON
      console.log("Fetched Homepage Data:", data); // Kontrollera om ACF finns här
      return {
        ...data,
        hero: data.acf?.selected_hero || null, // Lägg till hero direkt
        banner: data.acf?.selected_banner || null, // Lägg till banner direkt
      };
    } catch (error) {
      console.error("Error fetching homepage:", error);
      throw error;
    }
  },

  // Funktion för att hämta homepage-data inklusive Hero-data
  getHomePageWithSections: async () => {
    try {
      const homepageData = await HomeService.getHomePage();
      console.log("Fetched Homepage Data:", homepageData);

      // Hantera selected_hero som objekt eller ID
      const heroId =
        homepageData.acf.selected_hero?.ID || homepageData.acf.selected_hero;

      const bannerId =
        homepageData.acf.selected_banner?.ID ||
        homepageData.acf.selected_banner;

      if (!heroId) {
        throw new Error("Hero ID is missing or undefined in ACF data.");
      }
      console.log("Hero ID:", heroId, "Banner ID:", bannerId);

      const heroData = await HomeService.getHeroById(heroId);
      const bannerData = await HomeService.getBannerById(bannerId);
      console.log(
        "Fetched Hero Data:",
        heroData,
        "Fetched Banner Data:",
        bannerData
      );

      return { hero: heroData, banner: bannerData }; // Returnera Hero-data inklusive ACF-fält
    } catch (error) {
      console.error("Error fetching homepage with hero:", error);
      throw error;
    }
  },

  //HERO
  // Funktion för att hämta Hero-data baserat på ID
  getHeroById: async (heroId) => {
    try {
      const response = await fetch(`${BASE_URL}/hero/${heroId}`); // Ersätt {hero-id} med ID för hero ${heroId}
      if (!response.ok) {
        throw new Error(`Failed to fetch hero: ${response.statusText}`);
      }
      const data = await response.json();

      console.log("Fetched Hero Data:", data); // Kontrollera att ACF-fält är inkluderade
      return data; // Returnera Hero-data inklusive ACF-fält
    } catch (error) {
      console.error("Error fetching hero:", error);
      throw error;
    }
  },

  //BANNER
  // Funktion för att hämta Banner-data baserat på ID
  getBannerById: async (bannerId) => {
    try {
      const response = await fetch(`${BASE_URL}/banner/${bannerId}`); // Ersätt {banner-id} med ID för banner
      if (!response.ok) {
        throw new Error(`Failed to fetch banner: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Fetched Banner Data:", data); // Kontrollera att ACF-fält är inkluderade
      return data; // Returnera Banner-data inklusive ACF-fält
    } catch (error) {
      console.error("Error fetching banner:", error);
      throw error;
    }
  },
};

export default HomeService;
