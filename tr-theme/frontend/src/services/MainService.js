const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const cache = new Map();

export const fetchWithCache = async (url) => {
  // Radera den gamla cachen från localStorage
  localStorage.removeItem(url);
  
  // Hämta data på nytt
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();

    // Spara datan i localStorage för framtida användning
    localStorage.setItem(url, JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const MainService = {
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
      imageCache[imageId] = imageUrl;
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return "";
    }
  },
  getFaqData: async (perPage = 10) => {
    const url = `${BASE_URL}/faq-question?per_page=${perPage}&timestamp=${new Date().getTime()}`;

    return await fetchWithCache(url);
  }, 
  findDynamicField: (acf, fieldType) => {
    const fieldKey = Object.keys(acf || {}).find((key) => 
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    return fieldKey ? af[fieldKey] : null;
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
