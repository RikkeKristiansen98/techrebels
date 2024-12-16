const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const cache = new Map();


  // Cache för att lagra hämtad data
export const fetchWithCache = async (url) => {
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


const MainService = {
// Funktion för att hämta en bild baserat på ID
getImageById: async (imageId, imageCache) => {
    if (imageCache[imageId]) {
      return imageCache[imageId];
    }

    try {
      const response = await fetch(`${BASE_URL}/media/${imageId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const data = await response.json();
      const imageUrl = data.source_url;
      imageCache[imageId] = imageUrl;  // Cache the image URL
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return "";
    }
  },
  getHomePage: async () => {
    const url = `${BASE_URL}/pages/98`;
    return await fetchWithCache(url);
  },
};

export default MainService;