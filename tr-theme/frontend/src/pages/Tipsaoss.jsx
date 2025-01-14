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
      <div className="relative z-10 rounded-lg w-full xxs:w-[85%] md:w-[60%] xl:h-[30%] xl:w-[30%] p-6">
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center z-10 text-gray-800">
          Vill du skicka in tips till oss?
        </h1>

        <div className="flex justify-center relative z-10 max-w-lg w-full mt-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 gap-4"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                value={email}
                onChange={(e) =>
                  handleInputChange(setEmail, "email", e.target.value)
                }
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                E-post:
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_kategori"
                id="floating_kategori"
                value={kategori}
                onChange={(e) =>
                  handleInputChange(setKategori, "kategori", e.target.value)
                }
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_kategori"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Kategori:
              </label>
              {errors.kategori && (
                <span className="text-red-500 text-sm">{errors.kategori}</span>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_titel"
                id="floating_titel"
                value={titel}
                onChange={(e) =>
                  handleInputChange(setTitel, "titel", e.target.value)
                }
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_titel"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Titel:
              </label>
              {errors.titel && (
                <span className="text-red-500 text-sm">{errors.titel}</span>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_alder"
                id="floating_alder"
                value={alder}
                onChange={(e) =>
                  handleInputChange(setAlder, "alder", e.target.value)
                }
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_alder"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ålder:
              </label>
              {errors.alder && (
                <span className="text-red-500 text-sm">{errors.alder}</span>
              )}
            </div>

            <div className="col-span-2 relative z-0 w-full mb-5 group">
              <textarea
                name="floating_beskrivning"
                id="floating_beskrivning"
                value={beskrivning}
                onChange={(e) =>
                  handleInputChange(
                    setBeskrivning,
                    "beskrivning",
                    e.target.value
                  )
                }
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="floating_beskrivning"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Beskrivning:
              </label>
              {errors.beskrivning && (
                <span className="text-red-500 text-sm">
                  {errors.beskrivning}
                </span>
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
    </div>
  );
};
export default TipsaOss;
