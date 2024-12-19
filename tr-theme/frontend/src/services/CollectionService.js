const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async fetchCollection(page = 1, perPage = 16) {
    try {
      const response = await fetch(`${BASE_URL}/collection?page=${page}&per_page=${perPage}`);

      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
      const data = await response.json();

      return data.map((item) => {
        return {
          id: item.id, // Huvud-id
          title: item.acf?.collection_item_title || "No Title", // Titel
          tagline: item.acf?.collection_item_tagline || "No Title", // Titel
          description: item.acf?.collection_item_description || "No description",
          imageSrc: item.acf?.collection_item_image || null, // Bild-id
          url: item.acf?.collection_item_url || "#", // Länk
        };
      });
    } catch (error) {
      console.error("Error fetching collection:", error);
      throw error;
    }
  },

  async fetchAllCategoriesWithChildren() {
    try {
      const response = await fetch(`${BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
  
      const allCategories = await response.json();
  
      // Filtrera specifika parent-kategorier (ändra villkor baserat på din data)
      const parentCategories = allCategories.filter((category) =>
        ["ages", "area", "topic"].includes(category.slug)
      );
  
      // Lägg till respektive barn till varje parent
      const categoriesWithChildren = parentCategories.map((parent) => {
        const children = allCategories.filter(
          (category) => category.parent === parent.id
        );
        return {
          ...parent,
          children,
        };
      });
  
      console.log("Categories with children:", categoriesWithChildren);
      return categoriesWithChildren;
    } catch (error) {
      console.error("Error fetching categories with children:", error);
      throw error;
    }
  },
};

export default CollectionService;
