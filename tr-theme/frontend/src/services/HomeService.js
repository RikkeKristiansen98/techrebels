import { fetchWithCache } from "./MainService";

const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const carouselFieldNames = [
  "selected_carousel_item_one",
  "selected_carousel_item_two",
  "selected_carousel_item_three",
  "selected_carousel_item_four",
  "selected_carousel_item_five",
  "selected_carousel_item_six",
];

const HomeService = {
  createCarouselItems: (acfData) => {
    const items = [];
    for (let i = 1; i <= 6; i++) {
      const item = acfData[`selected_carousel_item_${i}`];
      if (item) {
        items.push(item);
      }
    }
    return items;
  },

  getHomePage: async () => {
    const url = `${BASE_URL}/pages/98`;
    return await fetchWithCache(url);
  },

  getHomePageWithSections: async () => {
    try {
      const homepageData = await HomeService.getHomePage();

      const extractId = (field) => (field ? field.ID || field : null);
      const extractType = (field) => field?.post_type || "default";

      const heroId = extractId(homepageData.acf?.selected_hero);
      const promoId = extractId(homepageData.acf?.selected_promo);
      const bannerId = extractId(homepageData.acf?.selected_banner);

      const carouselItems = carouselFieldNames
        .map((fieldName) => {
          const field = homepageData.acf?.[fieldName];
          if (!field) return null;

          const id = extractId(field);
          let type = extractType(field);
          // Mappa "attachment" till "media" direkt här:
          if (type === "attachment") type = "media";

          return { id, type };
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

      const [heroData, promoData, bannerData, carouselItemsData] = await Promise.all([
        HomeService.getHeroById(heroId),
        HomeService.getPromoById(promoId),
        HomeService.getBannerById(bannerId),
        HomeService.getCarouselItemsById(carouselItems),
      ]);

      return {
        hero: heroData,
        promo: promoData,
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

  getHeroById: async (heroId) => {
    const url = `${BASE_URL}/hero/${heroId}`;
    return await fetchWithCache(url);
  },

  getPromoById: async (promoId) => {
    const url = `${BASE_URL}/promo/${promoId}`;
    return await fetchWithCache(url);
  },

  getBannerById: async (bannerId) => {
    const url = `${BASE_URL}/banner/${bannerId}`;
    return await fetchWithCache(url);
  },

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
    return items.filter((item) => item !== null);
  },
};

export default HomeService;
