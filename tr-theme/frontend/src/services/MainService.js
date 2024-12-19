const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const cache = new Map();

// Cache för att lagra hämtad data
export const fetchWithCache = async (url) => {
  if (cache.has(url)) {
    return cache.get(url);
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    
    cache.set(url, data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const MainService = {
  getImageById: async (imageId, imageCache) => {
    if (imageCache[imageId]) {
      console.log("Returning cached image for ID:", imageId);
      return imageCache[imageId];
    }

    try {
      const response = await fetch(`${BASE_URL}/media/${imageId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const data = await response.json();
      const imageUrl = data.source_url;
      imageCache[imageId] = imageUrl;
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return "";
    }
  },

  //Hittar ett fält i ett ACF-objekt 
  // beroende på fälttypen och nyckelord

  findDynamicField: (acf, fieldType) => {
    const fieldKey = Object.keys(acf || {}).find((key) =>
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    return fieldKey ? acf[fieldKey] : null;
  },
};

export default MainService;
