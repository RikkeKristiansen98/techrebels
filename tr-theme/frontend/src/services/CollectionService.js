const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async fetchCollection(page = 1, perPage = 16) {
    try {
      const response = await fetch(`${BASE_URL}/collection?page=${page}&per_page=${perPage}`);
      
      if (!response.ok) {
        // Logga felet och svar från servern
        console.error(`HTTP-fel! status: ${response.status}`, await response.text());
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }

      const data = await response.json();
      return data.map((item) => ({
        id: item.id,
        title: item.acf?.collection_item_title || "No Title",
        tagline: item.acf?.collection_item_tagline || "No Tagline",
        description: item.acf?.collection_item_description || "No description",
        categories: item.categories || [],
        imageSrc: item.acf?.collection_item_image || null,
        url: item.acf?.collection_item_url || "#",
      }));
    } catch (error) {
      console.error("Error fetching collection:", error);
      throw error;
    }
  },

  async fetchAllCategoriesWithChildren() {
    try {
      const response = await fetch(`${BASE_URL}/categories?per_page=100`);
      
      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
  
      const allCategories = await response.json();
  
      // Filtrera specifika parent-kategorier (ändra villkor baserat på din data)
      const parentCategories = allCategories.filter((category) =>
        ["ages", "areas", "topics"].includes(category.slug)
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
  
      
      console.log("All categories:", allCategories); // Kontrollera att alla kategorier är korrekta
console.log("Filtered parent categories:", parentCategories); // Kontrollera att vi hittar föräldrakategorierna
console.log("Categories with children:", categoriesWithChildren); // Kontrollera att vi länkat barnen till rätt föräldrar

      return categoriesWithChildren;
    } catch (error) {
      console.error("Error fetching categories with children:", error);
      throw error;
    }
  },
  
};


export default CollectionService;
