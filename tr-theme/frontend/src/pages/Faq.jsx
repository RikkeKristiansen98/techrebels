import React, { useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import MainService from "../services/MainService"; // Om du har den här importen korrekt
import TypingEffect from 'react-typing-effect';

export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]); // Håller reda på öppna frågor
  const [faq, setFaq] = useState([]); // För att hålla FAQ-datan i komponenten
  const [isLoading, setIsLoading] = useState(true); // För att visa laddningsindikator

  const faqImage = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-12.png";



  // Funktion för att växla mellan att visa eller dölja en fråga
  const toggleQuestion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Stäng frågan om den redan är öppen
    } else {
      setActiveIndexes([...activeIndexes, index]); // Öppna frågan om den är stängd
    }
  };

  useEffect(() => {
    // Hämta FAQ-datan från MainService
    MainService.getFaqData()
      .then((data) => {
        setFaq(data); // Sätt FAQ-datan
        console.log(data);
        setIsLoading(false); // Sätt status till "ej laddning"
      })
      .catch((error) => {
        console.error("Fel vid hämtning av FAQ-datan:", error);
        setIsLoading(false); // Ändra laddningsstatus vid fel
      });
  }, []);

  return (
    <div className="bg-pinkTheme min-h-screen">
      {" "}
      {/* Här applicerar vi bakgrundsfärgen över hela sidan */}
      <div className="faq-container relative p-5 ml-[10%] mr-[10%]">
      <h1 className="faq-title xl:text-6xl xxs:text-xl xl:mb-[10%] xl:mt-[10%] text-center font-semibold text-blackTheme">
          <TypingEffect
            text="Här hittar du svar på de vanligaste frågorna!" // Här använder vi TypingEffect och skickar in den text du vill visa
            speed={100} // Justera hastigheten på skrivningen
            eraseSpeed={50} // Justera hastigheten för att radera texten (om du vill ha det)
            eraseDelay={2000} // Fördröjning innan texten raderas (om du vill ha det)
            typingDelay={500} // Fördröjning innan texten börjar skrivas
          />
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-[10%] mb-[30%] relative z-10">
          <div
            className="faq-content md:w-1/2 w-full xxs:w-[120%] p-28 xxs:p-12 xl:mb-[-10%] xl:mt-[-1%] xxs:mb-[15%] xxs:mt-[10%] xxs:ml-[-9%] xl:ml-[2%] border-4 border-blackTheme shadow-[4px_6px_3px_rgba(0,0,0,0.6)]"
            style={{ backgroundColor: "rgba(211, 211, 211, 0.3)" }}
          >
            <h2 className="faq-title xl:text-5xl xxs:text-xl xl:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              {isLoading ? (
                <div>Loading...</div> // Här kan du lägga till en skeleton loader istället
              ) : (
                faq.map((faqItem, index) => (
                  <div
                    className="faq-item border-b border-gray-400 py-6 cursor-pointer"
                    key={index}
                  >
                    <div
                      className="faq-question flex justify-between items-center xl:text-3xl xxs:text-xl font-semibold pr-2"
                      onClick={() => toggleQuestion(index)}
                    >
                      {faqItem.acf.faq_question}
                      <span className="faq-icon mt-6 xl:text-4xl xxs:text-2xl">
                        {activeIndexes.includes(index) ? (
                          <MdRemove />
                        ) : (
                          <MdAdd />
                        )}
                      </span>
                    </div>
                    {activeIndexes.includes(index) && (
                      <div className="faq-answer mt-5 xl:text-2xl xxs:text-xl text-black">
                        {faqItem.acf.faq_answer}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="faq-image md:w-1/2 w-full md:mt-0 md:ml-10 xl:mb-[-20%]">
            <img
              src={faqImage}
              alt="FAQ Image"
              className="w-[60%] h-auto object-contain rotate-12 ml-[15%] animate-slide-in-right-rotate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
