const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

// Cache för att lagra hämtad data
const cache = new Map();

const fetchWithCache = async (url) => {
  if (cache.has(url)) {
    console.log("Returning cached data for:", url);
    return cache.get(url);
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    cache.set(url, data); // Lagra data i cachen
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

console.log("Cache status:", cache);


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
    const url = `${BASE_URL}/pages/98`;
    return await fetchWithCache(url);
  },

  // Funktion för att hämta homepage-data inklusive Hero-data
  getHomePageWithSections: async () => {
    try {
      const homepageData = await HomeService.getHomePage();

      const extractId = (field) => (field ? field.ID || field : null);
      const extractType = (field) => field?.post_type || "default";

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
        throw new Error(
          "Hero ID, Banner ID, or Carousel Items are missing in ACF data."
        );
      }

      const [heroData, bannerData, carouselItemsData] = await Promise.all([
        HomeService.getHeroById(heroId),
        HomeService.getBannerById(bannerId),
        HomeService.getCarouselItemsById(carouselItems),
      ]);

      return {
        hero: heroData,
        banner: bannerData,
        carouselItems: Array.isArray(carouselItemsData)
          ? carouselItemsData
          : [],
      };
    } catch (error) {
      console.error("Error fetching homepage sections:", error);
      throw error;
    }
  },

  // Funktion för att hämta Hero-data baserat på ID
  getHeroById: async (heroId) => {
    const url = `${BASE_URL}/hero/${heroId}`;

    return await fetchWithCache(url);
  },

  // Funktion för att hämta Banner-data baserat på ID
  getBannerById: async (bannerId) => {
    const url = `${BASE_URL}/banner/${bannerId}`;
    return await fetchWithCache(url);
  },

  getCarouselItemsById: async (carouselItems) => {
    const items = await Promise.all(
      carouselItems.map(({ id, type }) => {
        const url = `${BASE_URL}/${type}/${id}`;
        return fetchWithCache(url).catch((error) => {
          console.error(`Error fetching ${type} item ${id}:`, error);
          return null; // Returnera null om hämtningen misslyckas
        });
      })
    );

    // Filtrera bort eventuella null-värden
    return items.filter((item) => item !== null);
  },
};

export default HomeService;
