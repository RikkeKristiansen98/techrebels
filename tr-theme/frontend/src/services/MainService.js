const BASE_URL = "https://techforalla.se/wp-json/wp/v2"; // Bas-URL för API-förfrågningar

const cache = new Map(); // Skapa en cache för att lagra data temporärt i minnet

// Funktion som hämtar data med cachekontroll
export const fetchWithCache = async (url) => {
  
  // Kontrollera om data redan finns lagrat i localStorage
  const cachedData = localStorage.getItem(url);
  if (cachedData) {
    return JSON.parse(cachedData); // Om datan finns, returnera den från localStorage
  }

  try {
    // Om datan inte finns, hämta den från API:t
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`); 
    }
    const data = await response.json();

    // Spara den hämtade datan i localStorage för framtida användning
    localStorage.setItem(url, JSON.stringify(data));

    return data; 
  } catch (error) {
    console.error("Error fetching data:", error); 
    throw error;
  }
};

// MainService som innehåller flera API-anrop och hjälpfunktioner
const MainService = {
  // Hämtar en bild via dess ID och använder en lokal cache för att lagra bild-URL:er
  getImageById: async (imageId, imageCache) => {
    if (imageCache[imageId]) {
      return imageCache[imageId]; // Om bilden redan finns i cachen, returnera den direkt
    }

    try {
      // Om bilden inte finns i cachen, hämta den från API:t
      const response = await fetch(`${BASE_URL}/media/${imageId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`); 
      }
      const data = await response.json();
      const imageUrl = data.source_url;
      
      // Spara den hämtade bildens URL i cachen
      imageCache[imageId] = imageUrl;
      return imageUrl; 
    } catch (error) {
      console.error("Error fetching image by ID:", error); 
      return ""; 
    }
  },

  // Hämtar FAQ-data med en angiven mängd objekt per sida och cachar förfrågningar
  getFaqData: async (perPage = 10) => {
    // Genererar URL för FAQ-data, med ett tidsstämpelfält för att förhindra cache-problem
    const url = `${BASE_URL}/faq-question?per_page=${perPage}&timestamp=${new Date().getTime()}`;

    // Använder fetchWithCache för att hantera hämtningen och cachen
    return await fetchWithCache(url);
  },

  // Hittar ett fält i ett ACF-objekt baserat på en specifik fälttyp
  findDynamicField: (acf, fieldType) => {
    // Sök efter nyckeln i ACF-objektet som innehåller den angivna fälttypen (case insensitive)
    const fieldKey = Object.keys(acf || {}).find((key) =>
      key.toLowerCase().includes(fieldType.toLowerCase())
    );
    // Returnerar fältvärdet om nyckeln hittas, annars null
    return fieldKey ? acf[fieldKey] : null;
  },
};

export default MainService; 
