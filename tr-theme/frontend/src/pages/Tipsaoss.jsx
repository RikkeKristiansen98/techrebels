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

  const lampImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-13.png";

  return (
    <div className="realtive flex flex-col justify-center items-center min-h-screen bg-pinkTheme">
      <div>
        <img
          src={lampImage}
          alt=""
          className="ml-[-190%] mb-[-60%] w-full rotate-12 hover:animate-vibrate"
        />
      </div>
      <div className="xxs:w-[85%] md:w-[60%] xl:h-[30%] xl:w-[30%] xl:mt-[-10%] xxs:mt-[-35%] ml-[5%]">
        <h1 className="faq-title xl:text-6xl xxs:text-3xl xl:mb-[10%] xl:mt-[10%] xxs:mb-[15%] text-center font-semibold text-blackTheme">
          <TypingEffect
            text="Vill du skicka in tips till oss?" // Här använder vi TypingEffect och skickar in den text du vill visa
            speed={100} // Justera hastigheten på skrivningen
            eraseSpeed={50} // Justera hastigheten för att radera texten (om du vill ha det)
            eraseDelay={2000} // Fördröjning innan texten raderas (om du vill ha det)
            typingDelay={500} // Fördröjning innan texten börjar skrivas
          />
        </h1>
        <div className="flex justify-center items-center w-full xl:p-24 xxs:p-8 xxs:mb-[20%] bg-yellowTheme border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-16 xl:w-[90%] xxs:gap-6"
          >
            {/* Email Field */}
            <div className="relative z-0 w-full mb-5 group flex items-center lg:w-[150%]">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute xl:text-3xl xl:left-0 xxs:left-[-10%] top-4 ml-[-10%] text-orange-500"
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
                className="block py-2.5 px-0 xl:w-[65%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute xl:text-3xl xxs:text-sm font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                E-post:
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Kategori Field */}
            <div className="relative z-10 w-full mb-5 group flex items-center">
              <FontAwesomeIcon
                icon={faList}
                className="absolute xl:text-3xl xl:left-0 xxs:left-[-10%] top-4 ml-[-15%] text-orange-500"
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
                className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_kategori"
                className="peer-focus:font-medium absolute xl:text-3xl xxs:text-sm font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-3xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orange-500"
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
                className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_titel"
                className="peer-focus:font-medium absolute xl:text-3xl xxs:text-sm font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-3xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orange-500"
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
                className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_alder"
                className="peer-focus:font-medium absolute xl:text-3xl xxs:text-sm font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-3xl xl:left-0 xxs:left-[-2%] top-4 ml-[-7%] text-orange-500"
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
                className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_beskrivning"
                className="peer-focus:font-medium absolute xl:text-3xl xxs:text-sm font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Beskriv ditt tips här:
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
                className="z-10 text-blackTheme rounded-lg xl:text-2xl xxs:text-lg transform transition-transform duration-300 ease hover:scale-110 bg-orange-500 font-semibold py-2 px-6 border-4 border-blackTheme"
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

// exempel på text att ha i en ruta som poppar upp när användaren har skickat in tips

// Tack för att du skickar in tips till oss.
// Håll utkik på hemsidan ifall just ditt tips dyker upp nånstans inom kort.
