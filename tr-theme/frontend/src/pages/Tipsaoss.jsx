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

  const handleSubmit = async (e) => {
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

    try {
      const response = await fetch(
        "https://techforalla.se/wp-json/wp/v2/send-email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, kategori, titel, alder, beskrivning }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setShowModal(true);
        setEmail("");
        setKategori("");
        setTitel("");
        setAlder("");
        setBeskrivning("");
        setErrors({});
      } else {
        alert(data.message || "Ett fel uppstod.");
      }
    } catch (error) {
      alert("Ett tekniskt fel uppstod.");
    }
  };

  const lampImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-13.png";

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-yellowTheme">
      <div>
        <img
          src={lampImage}
          alt=""
          className="ml-[-160%] xl:mt-[15%] xl:mb-[-50%] w-full rotate-12"
        />
      </div>
      <div className="xxs:w-[85%] md:w-[60%] xl:h-[30%] xl:w-[30%] xl:mt-[-15%] xxs:mt-[-130%] ml-[5%]">
        <h1 className="xl:text-5xl xxs:text-3xl xl:mb-[10%] xl:mt-[10%] xxs:mb-[15%] text-center font-semibold text-blackTheme">
          <TypingEffect
            text="Vill du skicka in tips till oss?"
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
          />
        </h1>
        <div className="flex justify-center items-center w-full xl:p-24 xxs:p-8 xxs:mb-[20%] bg-pinkTheme border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-16 xl:w-[90%] xxs:gap-6"
          >
            {/* Fält för E-post, Kategori, Titel, Ålder och Beskrivning */}
            {[
              { name: "email", label: "E-post", icon: faEnvelope, value: email, setter: setEmail },
              { name: "kategori", label: "Kategori", icon: faList, value: kategori, setter: setKategori },
              { name: "titel", label: "Titel", icon: faHeading, value: titel, setter: setTitel },
              { name: "alder", label: "Ålder", icon: faUser, value: alder, setter: setAlder },
            ].map(({ name, label, icon, value, setter }) => (
              <div key={name} className="relative z-0 w-full mb-5 group flex items-center">
                <FontAwesomeIcon icon={icon} className="absolute xl:text-3xl top-4 ml-[-20%] text-orange-500" />
                <input
                  type="text"
                  id={`floating_${name}`}
                  value={value}
                  onChange={(e) => handleInputChange(setter, name, e.target.value)}
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  required
                />
                <label htmlFor={`floating_${name}`} className="peer-focus:font-medium absolute text-blackTheme">
                  {label}:
                </label>
                {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
              </div>
            ))}

            {/* Beskrivning */}
            <div className="col-span-2 relative z-0 w-full mb-5 group flex items-center">
              <FontAwesomeIcon icon={faCommentDots} className="absolute xl:text-3xl top-4 ml-[-10%] text-orange-500" />
              <textarea
                id="floating_beskrivning"
                value={beskrivning}
                onChange={(e) => handleInputChange(setBeskrivning, "beskrivning", e.target.value)}
                placeholder=" "
                className="block py-2.5 px-0 w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                required
              />
              <label htmlFor="floating_beskrivning" className="peer-focus:font-medium absolute text-blackTheme">
                Beskriv ditt tips här:
              </label>
              {errors.beskrivning && <span className="text-red-500 text-sm">{errors.beskrivning}</span>}
            </div>

            {/* Skicka-knapp */}
            <div className="col-span-2 flex items-center justify-center mt-6">
              <button type="submit" className="text-blackTheme rounded-lg bg-orange-500 font-semibold py-2 px-6 border-4 border-blackTheme">
                Skicka tips
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup när tipset skickats */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Tack för ditt tips!</h2>
            <p>Håll utkik på hemsidan ifall just ditt tips dyker upp inom kort.</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded" onClick={() => setShowModal(false)}>
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TipsaOss;
