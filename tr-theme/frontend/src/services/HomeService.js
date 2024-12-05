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
      return data; // Returnera det parsade JSON-objektet
    } catch (error) {
      console.error("Error fetching homepage:", error);
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

  // Funktion för att hämta homepage-data inklusive Hero-data
  getHomePageWithHero: async () => {
    try {
      const homepageData = await HomeService.getHomePage();
      console.log("Fetched Homepage Data:", homepageData);
  
      // Hantera selected_hero som objekt eller ID
      const heroId = homepageData.acf.selected_hero?.ID || homepageData.acf.selected_hero;
      if (!heroId) {
        throw new Error("Hero ID is missing or undefined in ACF data.");
      }
      console.log("Hero ID:", heroId);
  
      const heroData = await HomeService.getHeroById(heroId);
      console.log("Fetched Hero Data:", heroData);
  
      return { hero: heroData };
    } catch (error) {
      console.error("Error fetching homepage with hero:", error);
      throw error;
    }
  },
  
  

  //BANNER
  // Funktion för att hämta Banner-data baserat på ID
};

export default HomeService;
