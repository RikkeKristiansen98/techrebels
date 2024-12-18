const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async getCollection() {
    try {
      const response = await fetch(`${BASE_URL}/collection`);

      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
      const data = await response.json();

      return data.map((item) => {
        return {
          id: item.id, // Huvud-id
          title: item.acf?.collection_item_title || "No Title", // Titel
          tagline: item.acf?.collection_item_tagline || "No Title", // Titel
          description:
            item.acf?.collection_item_description || "No description",
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
