import React, { useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import MainService from "../services/MainService"; // Om du har den här importen korrekt

export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]); // Håller reda på öppna frågor
  const [faq, setFaq] = useState([]); // För att hålla FAQ-datan i komponenten
  const [isLoading, setIsLoading] = useState(true); // För att visa laddningsindikator

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

  const lampImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-5.png";
  const faqImage =
    "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-8.png";

  return (
    <div className="faq-container relative p-5 ml-[10%] mr-[10%]">
      <h1 className="main-title text-center xl:text-6xl xxs:text-2xl mb-[10%] mt-[15%] relative z-10 font-semibold">
        Här hittar du svar på de vanligaste frågorna!
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-[10%] mb-[30%] relative z-10">
        <div
          className="faq-content md:w-1/2 w-full xxs:w-[120%] rounded-3xl p-28 xxs:p-12 xl:mb-[-10%] xl:mt-[-1%] xxs:mb-[15%] xxs:mt-[10%] xxs:ml-[-9%] xl:ml-[2%]"
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
                      {activeIndexes.includes(index) ? <MdRemove /> : <MdAdd />}
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
