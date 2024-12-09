const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const HomeService = {
  // Funktion för att hämta homepage-data
  getHomePage: async () => {
    try {
      const response = await fetch(`${BASE_URL}/pages/98`);
      if (!response.ok) {
        throw new Error(`Failed to fetch homepage: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Homepage ACF data:", data.acf); // Logga ACF-fält
      return {
        ...data,
        hero: data.acf?.selected_hero || null,
        banner: data.acf?.selected_banner || null,
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
  
      // Hämta hero och banner ID från ACF
      const heroId = homepageData.acf?.selected_hero?.ID || homepageData.acf?.selected_hero;
      const bannerId = homepageData.acf?.selected_banner?.ID || homepageData.acf?.selected_banner;
  
      if (!heroId || !bannerId) {
        throw new Error("Hero ID or Banner ID is missing in ACF data.");
      }
  
      // Parallellhämtning för bättre prestanda
      const [heroData, bannerData] = await Promise.all([
        HomeService.getHeroById(heroId),
        HomeService.getBannerById(bannerId),
      ]);
  
      // Returnera formaterad data
      return { hero: heroData, banner: bannerData };
    } catch (error) {
      console.error("Error fetching homepage sections:", error);
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
      console.log("fetched hero by id");
     
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
      console.log("fetched banner by id");
      return data; // Returnera Banner-data inklusive ACF-fält
    } catch (error) {
      console.error("Error fetching banner:", error);
      throw error;
    }
  },
};

export default HomeService;
