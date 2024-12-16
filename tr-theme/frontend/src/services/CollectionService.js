const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async getCollection() {
    try {
      const response = await fetch(`${BASE_URL}/collection`);
      if (!response.ok) {
        throw new Error(`HTTP-fel! status: ${response.status}`);
      }
      const data = await response.json();

      // Returnerar bara nödvändiga fält som en lista
      return data.map((item) => ({
        id: item.acf?.id,
        title: item.acf?.title,
        imageUrl: item.acf?.image?.source_url || null,
      }));
    } catch (error) {
      console.error("Error fetching collection:", error);
      throw error;
    }
  },
};

export default CollectionService;
