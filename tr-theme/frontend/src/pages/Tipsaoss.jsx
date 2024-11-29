import React, { useState } from "react";
import "../styles/pages-styles/tipsaoss.css"; // Importera CSS-filen om det finns specifik styling

const TipsaOss = () => {
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState("");
  const [titel, setTitel] = useState("");
  const [alder, setAlder] = useState("");
  const [beskrivning, setBeskrivning] = useState("");
  const [errors, setErrors] = useState({}); // För valideringsfel
  const [showModal, setShowModal] = useState(false); // för att hantera modalen

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

    setShowModal(true);
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      {/* SVG Blobbar */}
      {/* SVG Blob 2 */}
      <div className="absolute sm:mr-[72%] md:ml-[78%] md:w-[125%] md:h-[135%] lg:mr-[130%] lg:w-[100%] lg:h-[110%] xl:ml-[176%] xl:w-[70%] xl:h-[90%] sm:hidden md:flex z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#475841"
            d="M45,-57.8C57,-43.6,64.5,-28.1,69.1,-10.9C73.7,6.3,75.3,25.4,67.9,40.1C60.5,54.8,44,65.2,25.8,72.5C7.6,79.9,-12.4,84.3,-24.6,76.2C-36.9,68,-41.6,47.4,-48.5,30.4C-55.3,13.5,-64.3,0.3,-66.7,-16.3C-69.2,-32.8,-65.1,-52.8,-52.9,-66.9C-40.7,-81.1,-20.3,-89.5,-1.9,-87.2C16.5,-85,33,-72,45,-57.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden md:flex">
        {/* SVG Blob 1 */}
        <div className="absolute opacity-[95%]  sm:mr-[85%] md:ml-[88%] md:w-[123%] md:h-[180%] lg:mr-[130%] lg:w-[110%] lg:h-[113%] xl:mb-[6%] xl:ml-[164%] xl:w-[100%] xl:h-[130%] sm:hidden md:flex z-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF8E9"
              d="M28.4,-39.1C40.1,-36.6,55.3,-34.4,60.2,-26.6C65.2,-18.8,59.9,-5.5,55,5.8C50.1,17.1,45.7,26.4,41.2,40.9C36.8,55.4,32.3,75,23,77.2C13.8,79.3,-0.2,63.8,-14.4,56.4C-28.7,48.9,-43.2,49.4,-53,43.1C-62.9,36.8,-68.2,23.7,-69.8,10.2C-71.4,-3.2,-69.3,-17,-64.1,-29.6C-58.9,-42.3,-50.5,-53.9,-39.3,-56.6C-28,-59.3,-14,-53.1,-2.9,-48.7C8.3,-44.3,16.6,-41.5,28.4,-39.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Formulär ovanpå blobbarna */}
      <h1 className="text-4xl font-bold text-center z-10 text-gray-800 mb-6">
        Vill du skicka in tips till oss?
      </h1>

      <div className="relative z-10 p-8 max-w-lg w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              E-post:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) =>
                handleInputChange(setEmail, "email", e.target.value)
              }
              placeholder="example@example.com"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="kategori"
              className="block text-lg font-medium text-gray-700"
            >
              Kategori:
            </label>
            <input
              type="text"
              id="kategori"
              value={kategori}
              onChange={(e) =>
                handleInputChange(setKategori, "kategori", e.target.value)
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.kategori && (
              <span className="text-red-500 text-sm">{errors.kategori}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="titel"
              className="block text-lg font-medium text-gray-700"
            >
              Titel:
            </label>
            <input
              type="text"
              id="titel"
              value={titel}
              onChange={(e) =>
                handleInputChange(setTitel, "titel", e.target.value)
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.titel && (
              <span className="text-red-500 text-sm">{errors.titel}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="alder"
              className="block text-lg font-medium text-gray-700"
            >
              Ålder:
            </label>
            <input
              type="number"
              id="alder"
              value={alder}
              onChange={(e) =>
                handleInputChange(setAlder, "alder", e.target.value)
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.alder && (
              <span className="text-red-500 text-sm">{errors.alder}</span>
            )}
          </div>

          <div className="col-span-2 w-56">
            <label
              htmlFor="beskrivning"
              className="block text-lg font-medium text-gray-700"
            >
              Beskriv tipset:
            </label>
            <textarea
              id="beskrivning"
              value={beskrivning}
              onChange={(e) =>
                handleInputChange(setBeskrivning, "beskrivning", e.target.value)
              }
              placeholder="Din beskrivning..."
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.beskrivning && (
              <span className="text-red-500 text-sm">{errors.beskrivning}</span>
            )}
          </div>

          {/* Knapp */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn text-white font-bold py-2 px-4"
            >
              Skicka tips
            </button>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-4 rounded-md shadow-lg">
                  <h2 className="text-2xl font-bold">Tack!</h2>
                  <p>Tack för att du skickar in tips till oss!</p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 bg-blue-500 text-white p-2 rounded-md"
                  >
                    Stäng
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default TipsaOss;
