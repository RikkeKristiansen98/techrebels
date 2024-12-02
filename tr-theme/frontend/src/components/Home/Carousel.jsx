import React, { useState } from "react"; // Importerar React och useState-hooken för att hantera komponentens tillstånd
import leftArrow from "../../images/left-arrow-black.png"; // Importerar bilden för vänsterpilen
import rightArrow from "../../images/right-arrow-black.png"; // Importerar bilden för högerpilen
import CarouselCard from "./CarouselCard"; // Importerar CarouselCard-komponenten som representerar varje bild i karusellen

const Carousel = ({ cards }) => { // Tar emot "cards" som en prop, vilket är en lista med bilder eller kort att visa i karusellen
  const [currentIndex, setCurrentIndex] = useState(1); // Skapar ett tillstånd (state) för att hålla reda på det aktuella kortet (index) i karusellen, börjar på index 1
  const itemsPerSlide = 3; // Sätt antal kort som ska visas samtidigt, här visas 3 kort per gång
  const totalItems = cards.length; 

  // Funktion som anropas när användaren klickar på nästa (höger) pil
  const nextSlide = () => {
    // Uppdaterar "currentIndex" genom att gå vidare till nästa kort, och när vi når slutet så börjar vi om från början (cirkulär navigation)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Funktion som anropas när användaren klickar på föregående (vänster) pil
  const prevSlide = () => {
    // Uppdaterar "currentIndex" genom att gå bakåt till föregående kort, och när vi är på första kortet går vi till det sista kortet (cirkulär navigation)
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalItems) % totalItems
    );
  };

  // Funktion som beräknar storleken på varje kort beroende på om det är i mitten eller inte
  const getCardSize = (index) => {
    const middleIndex = Math.floor(itemsPerSlide / 2); // Beräknar det index som motsvarar mitten av de synliga korten
    const relativeIndex = (index + totalItems) % totalItems; // Ser till att indexet inte går utanför arrayen genom att använda modulusoperatorn
    // Om kortet är det i mitten, ge det en större storlek, annars gör det mindre
    if (relativeIndex === middleIndex) {
      return "w-[30%] scale-110"; // Större kort i mitten
    } else {
      return "w-[25%] scale-90"; // Mindre kort på sidorna
    }
  };

  // Funktion som beräknar och returnerar de kort som ska vara synliga baserat på currentIndex
  const getVisibleCards = () => {
    const visibleCards = []; // Skapar en tom array för att lagra de synliga korten
    for (let i = 0; i < itemsPerSlide; i++) { // Loopa genom de kort som ska visas (antalet beror på itemsPerSlide)
      // Lägg till det aktuella kortet från cards-arrayen till visibleCards-listan baserat på currentIndex
      visibleCards.push(cards[(currentIndex + i) % totalItems]);
    }
    return visibleCards; // Returnera de synliga korten
  };

  return (
    <div className="relative w-full"> {/* Container för hela karusellen */}
      <div className="relative z-10">
        <h2 className="header-2 text-3xl text-black text-center mb-6 mt-[10%]">
          Tech för alla tipsar {/* Rubrik för karusellen */}
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 ml-[10%]"
            onClick={prevSlide} // När användaren klickar på denna knapp, anropa prevSlide för att gå till föregående kort
          >
            <img src={leftArrow} alt="left arrow" className="w-6 h-6" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden relative p-10 mb-[15%] m-[5%]">
            <div className="flex transition-transform duration-500 ease-in-out gap-5 justify-center">
              {/* Loopa igenom de synliga korten och rendera dem */}
              {getVisibleCards().map((card, index) => (
                <div
                  className={`flex-shrink-0 transform transition-all duration-300 ${getCardSize(index)}`} // Använd getCardSize för att justera storleken på kortet
                  key={index} // Använd index som nyckel för varje kort
                >
                  <CarouselCard card={card} /> {/* Rendera CarouselCard för varje kort */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-20 mr-[10%]"
            onClick={nextSlide} // När användaren klickar på denna knapp, anropa nextSlide för att gå till nästa kort
          >
            <img src={rightArrow} alt="right arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel; // Exportera Carousel-komponenten för att använda den på andra ställen i applikationen



