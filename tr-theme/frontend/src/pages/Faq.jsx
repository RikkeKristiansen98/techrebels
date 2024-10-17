import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/faq.css';
import Image1 from '../img/1.png';
import Image2 from '../img/2.png';

export function Faq() {
  const [activeIndexes, setActiveIndexes] = useState([]);  // Lista för aktiva index

  const toggleQuestion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));  // Stäng frågan om den redan är öppen
    } else {
      setActiveIndexes([...activeIndexes, index]);  // Öppna frågan
    }
  };
  console.log(Image1);
  console.log(Image2);
  const faqData = [
    { question: 'Fråga 1', answer: 'Svar på fråga 1' },
    { question: 'Fråga 2', answer: 'Svar på fråga 2' },
    { question: 'Fråga 3', answer: 'Svar på fråga 3' },
    { question: 'Fråga 4', answer: 'Svar på fråga 4' },
    { question: 'Fråga 5', answer: 'Svar på fråga 5' }
  ];

  return (
    <div className="faq-container">
     
        <h1 className='main-title'>FAQ</h1>
      
      {/* Cloud images */}
      <div className="faq-hero">
  <div className="faq-shape-wrapper">
    <img src={Image1} alt="Form 1" className="faq-shape1" />
    <img src={Image2} alt="Form 2" className="faq-shape2" />
  </div>
</div>



      {/* FAQs List */}
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-list">
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
