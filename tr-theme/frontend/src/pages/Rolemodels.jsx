import { Link } from 'react-router-dom';
import '../styles/rolemodels.css';
import form1 from '../img/1.png';
import form2 from '../img/2.png';
import React, { useEffect, useState } from 'react';

export const Rolemodels = () => {
  const [rolemodels, setRolemodels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hämtar Förebilder från WordPress APIet
  useEffect(() => {
    fetch('https://techforalla.se/wp-json/wp/v2/forebilder?_embed')
      .then(response => response.json())
      .then(data => {
        setRolemodels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="rolemodels-container">
      <h1 className="rolemodels-title">Förebilder</h1>

      <div className="hero">
        <div className="shape-wrapper">
          <img src={form1} alt="Form 1" className="shape1" />
          <img src={form2} alt="Form 2" className="shape2" />
        </div>
 {/* Kategoriknappar */}
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
        {loading && <p>Laddar förebilder...</p>}

        {/* Grid-sektion för bilder av förebilderna */}
        <div className="grid-container">
          {rolemodels.length > 0 ? (
            rolemodels.map((rolemodel) => (
              <div className="grid-item" key={rolemodel.id}>
                {rolemodel.featured_media && (
                  <img
                    src={rolemodel._embedded['wp:featuredmedia'][0].source_url}
                    alt={rolemodel.title.rendered}
                  />
                )}
                <Link to={`/rolemodel/${rolemodel.slug}`}>
                  {rolemodel.title.rendered}
                </Link>
              </div>
            ))
          ) : (
            !loading && <p>Inga förebilder hittades.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rolemodels;
