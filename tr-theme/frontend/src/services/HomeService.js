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

//just nu går det bara att hämta från collection till carousel så inte rolemodels

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

      const heroId = extractId(homepageData.acf?.selected_hero);
      const promoId = extractId(homepageData.acf?.selected_promo);
      const bannerId = extractId(homepageData.acf?.selected_banner);

      const carouselItems = carouselFieldNames
        .map((fieldName) => {
          const field = homepageData.acf?.[fieldName];
          const id = extractId(field);
          if (!id) {
            console.warn(
              `Skipped carousel item because id is missing for field ${fieldName}`,
              field
            );
            return null;
          }
          return { id };
        })
        .filter((item) => item !== null);

      if (!carouselItems || carouselItems.length === 0) {
        console.warn("No valid carousel items found in ACF data.");
      }

      if (!heroId || !promoId || !bannerId) {
        throw new Error(
          "Hero ID, Promo ID, or Banner ID is missing in ACF data."
        );
      }

      const [heroData, promoData, bannerData, carouselItemsData] =
        await Promise.all([
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
      carouselItems.map(async ({ id }) => {
        const url = `${BASE_URL}/collection/${id}`;
        try {
          const data = await fetchWithCache(url);
          console.log(`Fetched collection item ${id}`);
          return data;
        } catch (error) {
          console.error(`Failed to fetch collection item ${id}`, error);
          return null;
        }
      })
    );

    return items.filter((item) => item !== null);
  },
};

export default HomeService;
