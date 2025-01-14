import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faList,
  faHeading,
  faUser,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="realtive flex flex-col justify-center items-center min-h-screen">
      <div className="rounded-lg w-full xxs:w-[85%] md:w-[60%] xl:h-[30%] xl:w-[30%] p-6">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-5%] left-[-2%] z-0 w-[25%] h-[70%] ml-[35%] xl:block xxs:hidden"
        >
          <path
            fill="#F1AB86"
            d="M47.8,-22.3C59.7,-6.9,65.7,17.2,56.7,31.6C47.8,45.9,23.9,50.4,-0.8,50.8C-25.6,51.3,-51.2,47.8,-60.1,33.5C-69,19.3,-61.2,-5.8,-48.4,-21.7C-35.6,-37.5,-17.8,-44.2,0,-44.2C17.9,-44.2,35.8,-37.6,47.8,-22.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[1%] left-[8%] z-10 w-[30%] h-[60%] ml-[35%] xl:block xxs:hidden"
        >
          <path
            fill="#16697A"
            d="M43,-28.6C47.8,-16.4,38.5,0.3,29,15.6C19.5,31,9.7,45,-2.4,46.4C-14.6,47.8,-29.1,36.5,-38.8,21.1C-48.5,5.6,-53.3,-13.9,-46,-27.6C-38.7,-41.3,-19.4,-49,-0.2,-48.9C19,-48.8,38.1,-40.9,43,-28.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <h1 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-center z-10 text-black">
          Vill du skicka in tips till oss?
        </h1>

        <div className="flex justify-center xl:mt-28 xxs:mt-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-16 w-[90%] xxs:gap-4"
          >
            {/* Email Field */}
            <div className="relative z-0 w-full mb-5 group flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orangeTheme"
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
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute xl:text-xl xxs:text-sm font-semibold text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orangeTheme"
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
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_kategori"
                className="peer-focus:font-medium absolute xl:text-xl xxs:text-sm font-semibold text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orangeTheme"
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
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_titel"
                className="peer-focus:font-medium absolute xl:text-xl xxs:text-sm font-semibold text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] top-4 ml-[-15%] text-orangeTheme"
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
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_alder"
                className="peer-focus:font-medium absolute xl:text-xl xxs:text-sm font-semibold text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] top-4 ml-[-7%] text-orangeTheme"
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
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label
                htmlFor="floating_beskrivning"
                className="peer-focus:font-medium absolute xl:text-xl xxs:text-sm font-semibold text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Beskriv din idé här:
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
                className="z-10 text-white rounded-lg text-[18px] transform transition-transform duration-300 ease hover:scale-110 bg-blueTheme font-bold py-2 px-6"
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
