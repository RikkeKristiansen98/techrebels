import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

// Komponent för FAQ-sektion
export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]); // Håller reda på vilka frågor som är öppna

  // Funktion för att växla mellan att visa eller dölja en fråga
  const toggleQuestion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Stäng frågan om den redan är öppen
    } else {
      setActiveIndexes([...activeIndexes, index]); // Öppna frågan om den är stängd
    }
  };

  const lampImage = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-5.png";
  const faqImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-8.png";

  // Data för frågor och svar
  const faqData = [
    { question: "Fråga 1", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Fråga 2", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Fråga 3", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Fråga 4", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { question: "Fråga 5", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  // Returnerar HTML-strukturen för FAQ-sektionen
  return (
    <div className="faq-container relative p-5 ml-[10%] mr-[10%]">
      {/* Titel med dina marginaler */}
      <h1 className="main-title text-center xl:text-6xl xxs:text-2xl mb-[10%] mt-[15%] relative z-10 font-semibold">
        Här hittar du svar på de vanligaste frågorna!
      </h1>

      {/* Använd flex för layout */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-[10%] mb-[30%] relative z-10">
        
        {/* FAQ-sektionen på vänster sida */}
        <div className="faq-content md:w-1/2 w-full xxs:w-[120%] rounded-3xl p-28 xxs:p-12 xl:mb-[-10%] xl:mt-[-1%] xxs:mb-[15%] xxs:mt-[10%] xxs:ml-[-9%] xl:ml-[2%]" style={{ backgroundColor: "rgba(211, 211, 211, 0.3)" }}>
          <h2 className="faq-title xl:text-5xl xxs:text-xl xl:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            {/* Loopar genom frågorna och renderar varje fråga och dess svar */}
            {Array.isArray(faqData) &&
              faqData.map((faq, index) => (
                <div
                  className="faq-item border-b border-gray-400 py-6 cursor-pointer"
                  key={index}
                >
                  {/* Klickbar fråga för att visa/dölja svaret */}
                  <div
                    className="faq-question flex justify-between items-center xl:text-3xl xxs:text-xl font-semibold pr-2"
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                    <span className="faq-icon mt-6 xl:text-4xl xxs:text-2xl"> {/* Justera storleken på ikonerna här */}
                      {activeIndexes.includes(index) ? (
                        <MdRemove /> // Minus ikon
                      ) : (
                        <MdAdd /> // Plus ikon
                      )}
                    </span>
                  </div>
                  {/* Visar svaret om frågan är öppen */}
                  {activeIndexes.includes(index) && (
                    <div className="faq-answer mt-5 xl:text-2xl xxs:text-xl text-black">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Bildsektionen på höger sida med margin-left */}
        <div className="faq-image md:w-1/2 w-full md:mt-0 md:ml-10 xl:mb-[-10%]">
          <img
            src={faqImage}
            alt="FAQ Image"
            className="w-[60%] h-auto object-contain rotate-12 ml-[15%] animate-slide-in-right-rotate"
          />
        </div>
      </div>
    </div>
  );
}




