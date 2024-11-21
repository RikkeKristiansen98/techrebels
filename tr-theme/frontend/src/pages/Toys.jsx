import React, { useEffect, useState } from 'react';
import '../styles/toys.css';
import form3 from '../images/1.png'; // Första bakgrundsformen
import form4 from '../images/2.png'; // Andra bakgrundsformen
import toys1 from '../images/toys.jpg';
import toys2 from '../images/toyss.jpg';
import toys3 from '../images/toysss.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Toys = () => {
     // State för varje filterkategori
     const [ageOpen, setAgeOpen] = useState(false);
     const [subjectOpen, setSubjectOpen] = useState(false);
     //const [typeOpen, setTypeOpen] = useState(false);
     //const [themeOpen, setThemeOpen] = useState(false);

    return (

    
        <div className="toys-container">
          <h1 className="toys-title">LEKSAKER</h1>
          {/* Hero Section */}
          <div className="toys">
            <div className="toys-wrapper">
              <img src={form3} alt="Form 3" className="shape3" />
              <img src={form4} alt="Form 4" className="shape4" />
            </div>
            </div>

             {/* Filter Section */}
             <div className="toysfilter-grid-section">
             <aside className="toys-filter">
                <h2>Filter</h2>

                {/* Åldersgrupp Filter */}
                <div className={`age-filter ${ageOpen ? 'open' : ''}`}>
                    <h4 onClick={() => setAgeOpen(!ageOpen)}>
                        Åldersgrupp
                        {ageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </h4>
                    <div className="list">
                            <label>
                                <input type="checkbox" /> 6-9 år
                            </label>
                            <label>
                                <input type="checkbox" /> 9-10 år
                            </label>
                            <label>
                                <input type="checkbox" /> 10-15 år
                            </label>
                            <label>
                                <input type="checkbox" /> 15-25 år
                            </label>
                        </div>
                </div>

                {/* Ämne Filter */}
                <div className={`subject-filter ${subjectOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setSubjectOpen(!subjectOpen)}>
                            Ämne
                            {subjectOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <label>
                                <input type="checkbox" /> Programmering
                            </label>
                            <label>
                                <input type="checkbox" /> Teknik
                            </label>
                        </div>
                    </div>
               
            </aside>
            
      {/* Image Grid */}
      <div className="toys-image-grid">
        <div className="toys-image-item">
          <img src={toys1} alt="Toy 1" />
          <p>Leksak 1</p>
        </div>
        <div className="toys-image-item">
          <img src={toys2} alt="Toy 2" />
          <p>Leksak 2</p>
        </div>
        <div className="toys-image-item">
          <img src={toys3} alt="Toy 3" />
          <p>Leksak 3</p>
        </div>
        <div className="toys-image-item">
          <img src={toys1} alt="Toy 1" />
          <p>Leksak 1</p>
        </div>
        <div className="toys-image-item">
          <img src={toys2} alt="Toy 2" />
          <p>Leksak 2</p>
        </div>
        <div className="toys-image-item">
          <img src={toys3} alt="Toy 3" />
          <p>Leksak 3</p>
        </div>
      </div>

            </div>
            </div>
   )         
}

export default Toys;