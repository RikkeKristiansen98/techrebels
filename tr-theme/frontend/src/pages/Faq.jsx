import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/faq.css';

export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);  // Lista för aktiva index

  const toggleQuestion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));  // Stäng frågan om den redan är öppen
    } else {
      setActiveIndexes([...activeIndexes, index]);  // Öppna frågan
    }
  };

  // Definiera en tom array om faqData av någon anledning skulle vara undefined
  const faqData = [
    { question: 'Fråga 1', answer: 'Svar på fråga 1' },
    { question: 'Fråga 2', answer: 'Svar på fråga 2' },
    { question: 'Fråga 3', answer: 'Svar på fråga 3' },
    { question: 'Fråga 4', answer: 'Svar på fråga 4' },
    { question: 'Fråga 5', answer: 'Svar på fråga 5' }
  ] || []; // Om faqData blir undefined, säkerställ att det fortfarande är en array

  return (
    <div className="faq-container">
      <h1 className='faq-title'>FAQs</h1>
      <div className="faq-list">
        {/* Kontrollera att faqData är en array innan du använder map */}
        {Array.isArray(faqData) && faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndexes.includes(index) ? <RemoveIcon /> : <AddCircleOutlineIcon />}
              </span>
            </div>
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
