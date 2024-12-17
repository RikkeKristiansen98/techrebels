const BASE_URL = "https://techforalla.se/wp-json/wp/v2";

const cache = new Map();
  // Cache för att lagra hämtad data
export const fetchWithCache = async (url) => {
  if (cache.has(url)) {
    // console.log("Returning cached data for:", url);
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
  
  // Funktion för att hämta bildens URL via dess ID.
  // I WordPress sparas ofta bilder som "media" inlägg, och när vi hämtar data från en post (t.ex. via ACF) kan bilder refereras till via ett ID istället för en URL.
  // Denna funktion tar emot bildens ID, gör en fetch-förfrågan till WordPress REST API för att hämta den faktiska URL:n till bilden (source_url).
  // Bildens URL cachas i imageCache för att undvika onödiga upprepade anrop, vilket förbättrar prestandan.
  // Om bilden redan finns i cache (imageCache[imageId]), returneras den direkt utan att behöva göra en ny fetch-förfrågan.
  // Funktionen returnerar den hämtade bildens URL eller en tom sträng om något går fel under hämtningen.
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
  
      // Logga hela svaret från API:t
      console.log("Image data:", data);

        // Kolla om det finns ACF-data i API-svaret
    if (data.acf) {
      console.log("ACF data:", data.acf);  // Logga ACF-datan
    } else {
      console.log("No ACF data in response");
    }
  
      const imageUrl = data.source_url;  // Hämta den faktiska URL:en
      imageCache[imageId] = imageUrl;  // Cache the image URL
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image by ID:", error);
      return "";
    }
  },
  
  findDynamicField: (acf, fieldType) => {
    const fieldKey = Object.keys(acf || {}).find((key) =>
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    return fieldKey ? acf[fieldKey] : null;
  },
};

export default MainService;