const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const carouselFieldNames = [
  "selected_carousel_item_one",
  "selected_carousel_item_two",
  "selected_carousel_item_three",
  "selected_carousel_item_four",
  "selected_carousel_item_five",
  "selected_carousel_item_six",
  "selected_carousel_item_seven",
];

const HomeService = {
  // Hjälpfunktion för att skapa en lista av carousel-items
  createCarouselItems: (acfData) => {
    const items = [];
    for (let i = 1; i <= 7; i++) {
      const item = acfData[`selected_carousel_item_${i}`];
      if (item) {
        items.push(item);
      }
    }
    return items;
  },

  // Funktion för att hämta homepage-data
  getHomePage: async () => {
    try {
      const response = await fetch(`${BASE_URL}/pages/98`);
      if (!response.ok) {
        throw new Error(`Failed to fetch homepage: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Homepage ACF data:", data.acf);

      return {
        ...data,
        hero: data.acf?.selected_hero || null,
        banner: data.acf?.selected_banner || null,
        carouselItemOne: data.acf?.selected_carousel_item_one || null,
        // carouselItems: HomeService.createCarouselItems(data.acf || {}), // Använd hjälpfunktionen här
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
  
      const extractId = (field) => (field ? field.ID || field : null);
      const extractType = (field) => field?.post_type || "default"; // Antag "default" om post_type saknas
  
      // Hämta hero och banner ID
      const heroId = extractId(homepageData.acf?.selected_hero);
      const bannerId = extractId(homepageData.acf?.selected_banner);
  
      // Extrahera carousel-items med deras ID och typ
      const carouselItems = carouselFieldNames
        .map((fieldName) => {
          const field = homepageData.acf?.[fieldName];
          return field
            ? { id: extractId(field), type: extractType(field) }
            : null;
        })
        .filter((item) => item); // Filtrera bort null
  
      console.log("Extracted Carousel Items:", carouselItems);
  
      if (!heroId || !bannerId || carouselItems.length === 0) {
        throw new Error("Hero ID, Banner ID, or Carousel Items are missing in ACF data.");
      }
  
      const [heroData, bannerData, carouselItemsData] = await Promise.all([
        HomeService.getHeroById(heroId),
        HomeService.getBannerById(bannerId),
        HomeService.getCarouselItemsById(carouselItems),
      ]);
  
      return {
        hero: heroData,
        banner: bannerData,
        carouselItems: Array.isArray(carouselItemsData) ? carouselItemsData : [],
      };
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

  getCarouselItemsById: async (carouselItems) => {
    try {
      const items = await Promise.all(
        carouselItems.map(({ id, type }) =>
          fetch(`${BASE_URL}/${type}/${id}`)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Failed to fetch ${type} item with ID: ${id}`);
              }
              return res.json();
            })
            .catch((error) => {
              console.error(`Error fetching ${type} item ${id}:`, error);
              return null; // Returnera null om hämtningen misslyckas
            })
        )
      );
  
      // Filtrera bort eventuella null-värden
      return items.filter((item) => item !== null);
    } catch (error) {
      console.error("Error fetching carousel items:", error);
      throw error;
    }
  },
  
  
};

export default HomeService;

