import React, { useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import MainService from "../services/MainService"; // Om du har den här importen korrekt
import TypingEffect from "react-typing-effect";

export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]); // Håller reda på öppna frågor
  const [faq, setFaq] = useState([]); // För att hålla FAQ-datan i komponenten
  const [isLoading, setIsLoading] = useState(true); // För att visa laddningsindikator

  const faqImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-12.png";

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
        setIsLoading(false); // Sätt status till "ej laddning"
      })
      .catch((error) => {
        console.error("Fel vid hämtning av FAQ-datan:", error);
        setIsLoading(false); // Ändra laddningsstatus vid fel
      });
  }, []);

  return (
    <div className="bg-yellowTheme min-h-screen">
      {" "}
      {/* Här applicerar vi bakgrundsfärgen över hela sidan */}
      <div className="relative p-5 ml-[10%] mr-[10%]">
        <h1 className="xl:text-4xl xxs:text-3xl xxs:mt-[27px] md:mb-[1px] xl:mb-[20px] xl:mt-[104px]  text-center font-bold text-blackTheme">
          <div className="relative overflow-hidden" style={{ height: "7.5rem" }}>
            <TypingEffect
              text="Här hittar du svar på de vanligaste frågorna!"
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </div>
        </h1>

        <div className="flex flex-col items-start justify-between gap-[10%] mb-[30%] relative z-10">
          <div className="xl:w-[50%] xxs:w-[120%] p-28 xxs:p-12 md:mb-[-25%] xl:mb-[-10%] xl:mt-[-1%] xxs:mb-[15%] xxs:mt-[10%] xxs:ml-[-9%] xl:ml-[2%] border-4 border-blackTheme shadow-[4px_6px_3px_rgba(0,0,0,0.6)] bg-pinkTheme">
            <h2 className="xl:text-4xl md:text-3xl xxs:text-lg xl:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="">
              {isLoading ? (
                <div>Loading...</div> // Här kan du lägga till en skeleton loader istället
              ) : (
                faq.map((faqItem, index) => (
                  <div
                    className="border-b border-gray-400 py-6 cursor-pointer"
                    key={index}
                  >
                    <div
                      className="flex justify-between items-center xl:text-3xl xxs:text-l md:text-xl font-semibold pr-2"
                      onClick={() => toggleQuestion(index)}
                    >
                      {faqItem.acf.faq_question}
                      <span className="mt-6 xl:text-4xl xxs:text-2xl">
                        {activeIndexes.includes(index) ? (
                          <MdRemove />
                        ) : (
                          <MdAdd />
                        )}
                      </span>
                    </div>
                    {activeIndexes.includes(index) && (
                      <div className="mt-5 xl:text-2xl xxs:text-sm md:text-lg text-black">
                        {faqItem.acf.faq_answer}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="w-full xl:mb-[-10%] xxs:hidden xl:block">
            <img
              src={faqImage}
              loading="lazy"
              alt="FAQ Image"
              className="w-[20%] h-auto object-contain rotate-12 ml-[70%] mt-[-25%] animate-slide-in-right-rotate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
