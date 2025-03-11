// Bas-URL för API-anropen
const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const CollectionService = {
  // Funktion för att hämta en samling (collection) med paginering
  async fetchCollection(page = 1, perPage = 16) {

    // Skicka ett GET-anrop till API:et med sidnummer och antal objekt per sida
    const response = await fetch(`${BASE_URL}/collection?page=${page}&per_page=${perPage}`);
    

    if (!response.ok) {
      
      throw new Error(`HTTP-fel! status: ${response.status}`);
    }
    
   
    return await response.json();  
  },

  // Funktion för att hämta alla kategorier inklusive deras barnkategorier
  async fetchAllCategoriesWithChildren() {
    // Skicka ett GET-anrop för att hämta kategorier, begränsat till 100 objekt per sida
    const response = await fetch(`${BASE_URL}/categories?per_page=100`);
    
   
    if (!response.ok) {
      
      throw new Error(`HTTP-fel! status: ${response.status}`);
    }
    
   
    return await response.json(); 
  },
};


export default CollectionService;
