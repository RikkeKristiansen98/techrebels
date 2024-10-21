import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/faq.css';
// import Image1 from '../img/1.png'
// import Image2 from '../img/2.png'

// Komponent för FAQ-sektion
export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);  // Håller reda på vilka frågor som är öppna

  // Funktion för att växla mellan att visa eller dölja en fråga
  const toggleQuestion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));  // Stäng frågan om den redan är öppen
    } else {
      setActiveIndexes([...activeIndexes, index]);  // Öppna frågan om den är stängd
    }
  };

  // Definierar bilder som används i FAQ-sektionen, denn ska hämta bilderna från build filen som vi ska ladda up till wordpress 
   const Image1 = `${window.location.origin}/wp-content/themes/tr-theme/tr-theme/frontend/dist/assets/1-DgN4-qfm.png`;
   const Image2 = `${window.location.origin}/wp-content/themes/tr-theme/tr-theme/frontend/dist/assets/2-BPtoIZwi.png`;

  // Data för frågor och svar
  const faqData = [
    { question: 'Fråga 1', answer: 'Svar på fråga 1' },
    { question: 'Fråga 2', answer: 'Svar på fråga 2' },
    { question: 'Fråga 3', answer: 'Svar på fråga 3' },
    { question: 'Fråga 4', answer: 'Svar på fråga 4' },
    { question: 'Fråga 5', answer: 'Svar på fråga 5' }
  ];

  // Returnerar HTML-strukturen för FAQ-sektionen
  return (
    <div className="faq-container">
      <h1 className='main-title'>FAQ</h1>
      <div className="faq-hero">
        <div className="faq-shape-wrapper">
          {/* Bildkomponenter */}
          <img src={Image1} alt="Form 1" className="faq-shape1" />
          <img src={Image2} alt="Form 2" className="faq-shape2" />
        </div>
      </div>
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
        {/* Loopar genom frågorna och renderar varje fråga och dess svar */}
        {Array.isArray(faqData) && faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            {/* Klickbar fråga för att visa/dölja svaret */}
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndexes.includes(index) ? <RemoveIcon /> : <AddCircleOutlineIcon />} {/* Visar ikonen för att öppna eller stänga */}
              </span>
            </div>
            {/* Visar svaret om frågan är öppen */}
            {activeIndexes.includes(index) && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
