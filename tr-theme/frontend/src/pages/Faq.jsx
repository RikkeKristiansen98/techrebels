import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";

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

  const faqImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement.png";

  // Data för frågor och svar
  const faqData = [
    { question: "Fråga 1", answer: "Svar på fråga 1" },
    { question: "Fråga 2", answer: "Svar på fråga 2" },
    { question: "Fråga 3", answer: "Svar på fråga 3" },
    { question: "Fråga 4", answer: "Svar på fråga 4" },
    { question: "Fråga 5", answer: "Svar på fråga 5" },
  ];

  // Returnerar HTML-strukturen för FAQ-sektionen
  return (
    <div className="faq-container relative p-5 ml-[10%] mr-[10%]">
      {/* Titel med dina marginaler */}
      <h1 className="main-title text-center text-7xl mb-[10%] mt-[15%] relative z-10">
        Här hittar du svar på de vanligaste frågorna!
      </h1>

      {/* Använd flex för layout */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-[10%] mb-[30%] relative z-10">
        
        {/* FAQ-sektionen på vänster sida */}
        <div className="faq-content md:w-1/2 w-full">
          <h2 className="faq-title text-left text-5xl mb-5">
            Frequently Asked Questions
          </h2>
          <div className="faq-list border-b border-gray-300">
            {/* Loopar genom frågorna och renderar varje fråga och dess svar */}
            {Array.isArray(faqData) &&
              faqData.map((faq, index) => (
                <div
                  className="faq-item border-b border-gray-300 py-2 cursor-pointer"
                  key={index}
                >
                  {/* Klickbar fråga för att visa/dölja svaret */}
                  <div
                    className="faq-question flex justify-between items-center text-2xl font-bold pr-2"
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                    <span className="faq-icon text-2xl mt-3">
                      {activeIndexes.includes(index) ? (
                        <RemoveIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )}
                    </span>
                  </div>
                  {/* Visar svaret om frågan är öppen */}
                  {activeIndexes.includes(index) && (
                    <div className="faq-answer mt-2 text-base text-black">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Bildsektionen på höger sida med margin-left */}
        <div className="faq-image md:w-1/2 w-full mt-8 md:mt-0 md:ml-10">
          <img
            src={faqImage}
            alt="FAQ Image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}



