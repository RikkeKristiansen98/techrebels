import '../styles/media.css';
import form1 from '../images/1.png'; 
import form2 from '../images/2.png'; 
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export const Media = () => {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);

  return (
    <div className="media-container">
      <div className="media-hero">
        <div className="media-shape-wrapper">
          <img src={form1} alt="Form 1" className="shape1" />
          <img src={form2} alt="Form 2" className="shape2" />
        </div>
      </div>
      
      <div className="media-content">
        <aside className="media-filter">
          <h2>Filter</h2>
                             {/* Category Filter */}
                             <div className={`category ${categoryOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setCategoryOpen(!categoryOpen)}>
                            Kategori
                            {categoryOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Age Filter */}
                    <div className={`age ${ageOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setAgeOpen(!ageOpen)}>
                            Ålder
                            {ageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Language Filter */}
                    <div className={`language ${languageOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setLanguageOpen(!languageOpen)}>
                            Språk
                            {languageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div className={`subject ${subjectOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setSubjectOpen(!subjectOpen)}>
                            Ämne
                            {subjectOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>
                </aside>
        
        <section className="grid-container">
          {/* Add more items as needed */}
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
          <div className="media-item">
            <img src="https://via.placeholder.com/150" alt="test photo" />
            <h3>titel</h3>
          </div>
        </section>
      </div>
    </div>
  );
};  
  
  export default Media;