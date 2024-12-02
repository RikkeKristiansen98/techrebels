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
  const formImage = [
    "https://techforalla.se/images/form-background2.png.png"
  ];

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
<div className="absolute flex justify-center m-[6%]">
  <img src={formImage} alt="form-background" className="w-[50%] h-[50%] mb-[8%] object-cover" />
</div>

      <h1 className="text-4xl font-bold text-center z-10 text-gray-800">
        Vill du skicka in tips till oss?
      </h1>

      <div className="relative z-10 max-w-lg w-full ml-[1%] mt-[2%]">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
          <div className="w-[116%]">
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

          <div className="col-span-2 w-64">
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
          <div className="flex items-center mt-[20%]">
            <button
              type="submit"
              className="btn text-white font-bold py-2 px-4"
            >
              Skicka tips
            </button>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                <div className="bg-white p-7 rounded-md shadow-lg">
                  <h2 className="text-2xl text-center mb-4 font-bold">Tack!</h2>
                  <p>Vi har tagit emot ditt tips!</p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="relative top-4 right-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
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
