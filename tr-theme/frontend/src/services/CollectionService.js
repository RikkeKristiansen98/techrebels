const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  async fetchCollection(page = 1, perPage = 16) {
    const response = await fetch(`${BASE_URL}/collection?page=${page}&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error(`HTTP-fel! status: ${response.status}`);
    }
    return await response.json();  // Returnera rådata, ingen manipulation här
  },

  async fetchAllCategoriesWithChildren() {
    const response = await fetch(`${BASE_URL}/categories?per_page=100`);
    if (!response.ok) {
      throw new Error(`HTTP-fel! status: ${response.status}`);
    }
    return await response.json(); // Returnera rådata, ingen manipulation här
  },
};

export default CollectionService;
