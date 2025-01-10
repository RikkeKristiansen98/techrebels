import React, { useState } from "react";

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
    <div
      className="relative z-10 rounded-lg w-full xxs:w-[80%] md:w-[60%] xl:h-[30%] xl:w-[30%] p-6"
      style={{ backgroundColor: "rgba(241, 171, 134, 0.8)" }}
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center z-10 text-gray-800 mt-4">
        Vill du skicka in tips till oss?
      </h1>
  
      <div className="flex justify-center relative z-10 max-w-lg w-full mt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 gap-4">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-base sm:text-lg font-medium text-gray-700"
            >
              E-post:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(setEmail, "email", e.target.value)}
              placeholder="example@example.com"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
  
          <div className="w-full">
            <label
              htmlFor="kategori"
              className="block text-base sm:text-lg font-medium text-gray-700"
            >
              Kategori:
            </label>
            <input
              type="text"
              id="kategori"
              value={kategori}
              onChange={(e) => handleInputChange(setKategori, "kategori", e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.kategori && (
              <span className="text-red-500 text-sm">{errors.kategori}</span>
            )}
          </div>
  
          <div className="w-full">
            <label
              htmlFor="titel"
              className="block text-base sm:text-lg font-medium text-gray-700"
            >
              Titel:
            </label>
            <input
              type="text"
              id="titel"
              value={titel}
              onChange={(e) => handleInputChange(setTitel, "titel", e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.titel && (
              <span className="text-red-500 text-sm">{errors.titel}</span>
            )}
          </div>
  
          <div className="w-full">
            <label
              htmlFor="alder"
              className="block text-base sm:text-lg font-medium text-gray-700"
            >
              Ålder:
            </label>
            <input
              type="number"
              id="alder"
              value={alder}
              onChange={(e) => handleInputChange(setAlder, "alder", e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm outline-none"
            />
            {errors.alder && (
              <span className="text-red-500 text-sm">{errors.alder}</span>
            )}
          </div>
  
          <div className="col-span-2">
            <label
              htmlFor="beskrivning"
              className="block text-base sm:text-lg font-medium text-gray-700"
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
              className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm outline-none w-full flex"
            />
            {errors.beskrivning && (
              <span className="text-red-500 text-sm">{errors.beskrivning}</span>
            )}
          </div>
  
          <div className="col-span-2 flex items-center justify-center mt-6">
            <button
              type="submit"
              className="text-white rounded-lg text-[18px] transform transition-transform duration-300 ease hover:scale-110 bg-blueTheme font-bold py-2 px-6"
            >
              Skicka tips
            </button>
          </div>
        </form>
      </div>
    </div>
  
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-3%] left-[50%] w-[150%] md:w-[100%] h-[90%] transform -translate-x-1/2 scale-[1.2] object-cover opacity-90"
      >
        <path
          fill="#16697A"
          d="M27.4,-47C37.1,-41.9,47.6,-37.7,59.2,-30C70.8,-22.4,83.6,-11.2,77.1,-3.7C70.7,3.7,45.1,7.5,37.2,21.7C29.4,36,39.4,60.7,36.1,73.1C32.9,85.5,16.4,85.6,6.4,74.6C-3.7,63.6,-7.5,41.5,-16,32.2C-24.6,22.8,-37.9,26.2,-51,23C-64,19.7,-76.8,9.9,-80.4,-2.1C-84,-14,-78.5,-28.1,-65.1,-30.6C-51.6,-33.2,-30.2,-24.2,-18,-27.8C-5.9,-31.5,-2.9,-47.7,3,-52.9C8.9,-58,17.8,-52.1,27.4,-47Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  </div>
  
  );
};
export default TipsaOss;
