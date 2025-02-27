import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faList,
  faHeading,
  faUser,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "react-typing-effect";

const TipsaOss = () => {
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState("");
  const [titel, setTitel] = useState("");
  const [alder, setAlder] = useState("");
  const [beskrivning, setBeskrivning] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (setter, fieldName, value) => {
    setter(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
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

    setEmail("");
    setKategori("");
    setTitel("");
    setAlder("");
    setBeskrivning("");
    setErrors({});
    setShowModal(true);
  };

  const sideImage =
    "http://techforalla.se/wp-content/uploads/2025/02/element-flowerss-e1739377698139.png";

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-yellowTheme">
      <div className="flex flex-col justify-center items-center xxs:w-[85%] xxs:mb-[20%] xxs:mt-[10%] md:w-[60%] md:mt-[1%] xl:mt-[10%] xl:h-[30%] xl:w-[50%]  ">
        <h1 className="xl:text-4xl xxs:text-2xl md:text-3xl xl:mb-[10%] xxs:mb-[5%] text-center font-semibold text-blackTheme">
          <div className="relative" style={{ height: "4.5rem" }}>
            <TypingEffect
              text="Vill du skicka in tips till oss?" // Här använder vi TypingEffect och skickar in den text du vill visa
              speed={100} // Justera hastigheten på skrivningen
              eraseSpeed={50} // Justera hastigheten för att radera texten (om du vill ha det)
              eraseDelay={2000} // Fördröjning innan texten raderas (om du vill ha det)
              typingDelay={500} // Fördröjning innan texten börjar skrivas
            />
          </div>
        </h1>
        <div className="relative flex justify-center items-center w-full xxs:p-10 xxs:py-16 2xl:py-28 bg-pinkTheme xl:border-4 xxs:border-[3px] border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]">
          {/* blommor */}
          <div className="absolute top-0 right-0 md:w-[50%] md:h-[100%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" className="max-w-full h-auto" />
          </div>

          <div className="absolute top-0 left-0 md:w-[50%] md:h-[100%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" className="max-w-full h-auto" />
          </div>
          <div className="absolute bottom-0 right-0 md:w-[50%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" className="max-w-full h-auto" />
          </div>

          <div className="absolute bottom-0 left-0 md:w-[50%] xl:overflow-hidden">
            <img
              src={sideImage}
              loading="lazy"
              alt="blommor"
              className="max-w-full h-auto"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="ml-12 grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-14 xl:w-[90%] 2xl:ml-28 xxs:gap-6"
          >
            {/* Email Field */}
            <div className="relative z-0 w-full xl:w-[124%] group flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute xl:text-2xl xl:left-[-2%] xxs:left-[-10%] md:left-[4%] top-4 ml-[-15%] text-blackTheme"
              />

              <input
                type="email"
                name="floating_email"
                id="floating_email"
                value={email}
                onChange={(e) =>
                  handleInputChange(setEmail, "email", e.target.value)
                }
                placeholder=" "
                className="block xl:py-4 xxs:py-2.5 px-0 xl:w-[65%] xxs:w-[100%] md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                E-post:
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Kategori Field */}
            <div className="relative z-10 w-full group flex items-center">
              <FontAwesomeIcon
                icon={faList}
                className="absolute xl:text-2xl xl:left-[-2%] xxs:left-[-10%] md:left-[4%] top-4 ml-[-20%] text-blackTheme"
              />
              <input
                type="text"
                name="floating_kategori"
                id="floating_kategori"
                value={kategori}
                onChange={(e) =>
                  handleInputChange(setKategori, "kategori", e.target.value)
                }
                placeholder=" "
                className="block xl:py-4 xxs:py-2.5 px-0 md:w-[80%] w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_kategori"
                className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Kategori:
              </label>
              {errors.kategori && (
                <span className="text-red-500 text-sm">{errors.kategori}</span>
              )}
            </div>

            {/* Titel Field */}
            <div className="relative z-0 w-full mb-5 group flex items-center">
              <FontAwesomeIcon
                icon={faHeading}
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] md:left-[6%] top-4 ml-[-20%] text-blackTheme"
              />
              <input
                type="text"
                name="floating_titel"
                id="floating_titel"
                value={titel}
                onChange={(e) =>
                  handleInputChange(setTitel, "titel", e.target.value)
                }
                placeholder=" "
                className="block xl:py-4 xxs:py-2.5 px-0 w-full md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_titel"
                className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Titel:
              </label>
              {errors.titel && (
                <span className="text-red-500 text-sm">{errors.titel}</span>
              )}
            </div>

            {/* Ålder Field */}
            <div className="relative z-10 w-full mb-5 group flex items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] md:left-[4%] top-4 ml-[-20%] text-blackTheme"
              />
              <input
                type="text"
                name="floating_alder"
                id="floating_alder"
                value={alder}
                onChange={(e) =>
                  handleInputChange(setAlder, "alder", e.target.value)
                }
                placeholder=" "
                className="block xl:py-4 xxs:py-2.5 px-0 md:w-[80%] w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_alder"
                className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ålder:
              </label>
              {errors.alder && (
                <span className="text-red-500 text-sm">{errors.alder}</span>
              )}
            </div>

            {/* Beskrivning Field */}
            <div className="col-span-2 relative z-0 w-full mb-5 group flex items-center">
              <FontAwesomeIcon
                icon={faCommentDots}
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-2%] md:left-[3%] top-4 ml-[-10%] text-blackTheme"
              />
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
                className="block xl:py-4 xxs:py-2.5 px-0 md:w-[90%] w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_beskrivning"
                className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Beskriv ditt tips här:
              </label>
              {errors.beskrivning && (
                <span className="text-red-500 text-sm">
                  {errors.beskrivning}
                </span>
              )}
            </div>

            <div className="col-span-2 flex items-center justify-center mt-6 mr-12">
              <button
                onClick={handleSubmit}
                type="submit"
                className="z-10 text-blackTheme rounded-lg xl:text-2xl xxs:text-l transform transition-transform duration-300 ease hover:scale-110 bg-orange-500 font-semibold py-2 px-6 xl:border-4 xxs:border-[3px] border-blackTheme"
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
