import React, { useEffect, useState } from 'react';
import '../styles/toys.css';
import form3 from '../img/1.png'; // Första bakgrundsformen
import form4 from '../img/2.png'; // Andra bakgrundsformen
import toys1 from '../img/toys.jpg';
import toys2 from '../img/toyss.jpg';
import toys3 from '../img/toysss.jpg';

export const Toys = () => {
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
             {/* Category Buttons */}
      <div className="toys-buttons">
        <button>Åldersgrupp</button>
        <button>Typ av leksak</button>
        <button>Prisklass</button>
        <button>Matrial</button>
        <button>Tema</button>
        
      </div>

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
   )         
}

export default Toys;