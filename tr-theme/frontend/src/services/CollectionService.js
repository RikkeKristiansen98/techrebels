const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async getCollection() {
    try {
      const response = await fetch(`${BASE_URL}/collection`);
      
      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API response for collection:", data); // Logga hela svaret

      return data.map((item) => {
        console.log("ACF data in item:", item.acf);  // Logga ACF-datan i varje objekt

        return {
          id: item.id, // Huvud-id
          title: item.acf?.collection_item_title || "No Title", // Titel
          author: item.acf?.collection_author || "No Title", // Titel
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
};

export default CollectionService;
