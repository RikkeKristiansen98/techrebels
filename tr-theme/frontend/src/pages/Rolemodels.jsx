import React from "react";
import '../styles/rolemodels.css';
import form1 from '../img/1.png'; 
import form2 from '../img/2.png'; 

export const Rolemodels = () => {

  return (
    <div className="rolemodels-container">
      <h1 className="rolemodels-title">Förebilder</h1>

      <div className="hero">
        <div className="shape-wrapper">
          <img src={form1} alt="Form 1" className="shape1" />
          <img src={form2} alt="Form 2" className="shape2" />
        </div>

        {/* Kategoriknappar, kommer bli filtrering för sidan sen med usestate tänkar jag? */}
        <div className="category-rolemodels-section">
          <div className="category-rolemodels-grid">
            <button className="c-btn">Kategori 1</button>
            <button className="c-btn">Kategori 2</button>
            <button className="c-btn">Kategori 3</button>
            <button className="c-btn">Kategori 4</button>
            <button className="c-btn">Kategori 5</button>
            <button className="c-btn">Kategori 6</button>
          </div>
        </div>

      {/* Grid-sektion för bilder av förebilderna */}
      <div className="grid-container">
        {/* ersättas med riktiga bilder sen */}
        <div className="grid-item">
          <img src="path_to_image_1.png" alt="Person 1" />
          <a href="/person1">Person 1</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_2.png" alt="Person 2" />
          <a href="/person2">Person 2</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_3.png" alt="Person 3" />
          <a href="/person3">Person 3</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_4.png" alt="Person 4" />
          <a href="/person4">Person 4</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_5.png" alt="Person 5" />
          <a href="/person5">Person 5</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_6.png" alt="Person 6" />
          <a href="/person6">Person 6</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_7.png" alt="Person 7" />
          <a href="/person7">Person 7</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_8.png" alt="Person 8" />
          <a href="/person8">Person 8</a>
        </div>
        <div className="grid-item">
          <img src="path_to_image_9.png" alt="Person 9" />
          <a href="/person9">Person 9</a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Rolemodels;
