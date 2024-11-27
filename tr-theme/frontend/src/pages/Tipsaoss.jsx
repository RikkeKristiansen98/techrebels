import React, { useState } from "react";
import "../styles/tipsaoss.scss"; // Importera CSS-filen om det finns specifik styling

const TipsaOss = () => {
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState("");
  const [titel, setTitel] = useState("");
  const [alder, setAlder] = useState("");
  const [beskrivning, setBeskrivning] = useState("");
  const [errors, setErrors] = useState({}); // För valideringsfel

  // Funktion för att hantera input-förändringar och rensa felmeddelanden
  const handleInputChange = (setter, fieldName, value) => {
    setter(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "", // Rensar felmeddelanden för det aktuella fältet
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "E-post krävs";
    if (!kategori) newErrors.kategori = "Kategori krävs";
    if (!titel) newErrors.titel = "Titel krävs";
    if (!alder) newErrors.alder = "Ålder krävs";
    if (!beskrivning) newErrors.beskrivning = "Beskrivning krävs";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Om validering lyckas
    console.log({ email, kategori, titel, alder, beskrivning });
    setEmail("");
    setKategori("");
    setTitel("");
    setAlder("");
    setBeskrivning("");
    setErrors({});
  };

  return (
<div className="relative flex justify-center items-center min-h-screen">
      {/* SVG Blob 1 */}
      <div className="absolute inset-0 lg:ml-[25%] lg:w-[55%] lg:h-[55%] z-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#475841"
            d="M43.1,-59.3C52.2,-52.7,53.4,-35.2,59.9,-18.6C66.4,-2.1,78.1,13.6,76.6,26.9C75,40.3,60.2,51.3,45.2,56.8C30.2,62.3,15.1,62.3,1,61C-13.2,59.7,-26.4,57.1,-35,49.5C-43.6,41.9,-47.6,29.3,-56.6,15.2C-65.7,1,-79.7,-14.7,-80.1,-29.9C-80.5,-45.1,-67.3,-59.8,-51.7,-64.3C-36.1,-68.8,-18,-63.2,-0.5,-62.4C17,-61.7,34,-65.9,43.1,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* SVG Blob 2 */}
      <div className="absolute inset-0 lg:ml-[25%] lg:w-[55%] lg:h-[55%] z-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#CA8787"
            d="M25.3,-30.7C34.5,-22.5,44.7,-16.1,49.7,-6.1C54.6,3.9,54.2,17.5,48.4,28.4C42.7,39.4,31.5,47.7,19.6,50.7C7.7,53.6,-5,51.2,-20.5,48.8C-35.9,46.4,-54.1,44.1,-55.7,35.1C-57.4,26.2,-42.4,10.7,-37.8,-5.1C-33.1,-20.8,-38.7,-36.8,-34.1,-45.8C-29.5,-54.9,-14.8,-57,-3.3,-53C8.1,-49,16.1,-38.9,25.3,-30.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Formulär utan bakgrund och border */}
      <div className="relative z-10 max-w-lg w-full mx-4">
        <h1 className="text-5xl font-bold mb-6 text-center">Tipsa oss</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Din epost
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(setEmail, "email", e.target.value)}
              placeholder="example@example.com"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <span className="text-red-500 text-xl">{errors.email}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="kategori" className="block text-xl font-medium text-gray-700">
              Kategori
            </label>
            <input
              type="text"
              id="kategori"
              value={kategori}
              onChange={(e) => handleInputChange(setKategori, "kategori", e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.kategori && <span className="text-red-500 text-xl">{errors.kategori}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="titel" className="block text-xl font-medium text-gray-700">
              Titel
            </label>
            <input
              type="text"
              id="titel"
              value={titel}
              onChange={(e) => handleInputChange(setTitel, "titel", e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.titel && <span className="text-red-500 text-xl">{errors.titel}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="alder" className="block text-xl font-medium text-gray-700">
              Ålder
            </label>
            <input
              type="number"
              id="alder"
              value={alder}
              onChange={(e) => handleInputChange(setAlder, "alder", e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.alder && <span className="text-red-500 text-xl">{errors.alder}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="beskrivning" className="block text-xl font-medium text-gray-700">
              Beskriv tipset
            </label>
            <textarea
              id="beskrivning"
              value={beskrivning}
              onChange={(e) => handleInputChange(setBeskrivning, "beskrivning", e.target.value)}
              placeholder="Din beskrivning..."
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.beskrivning && <span className="text-red-500 text-xl">{errors.beskrivning}</span>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
};
export default TipsaOss;
