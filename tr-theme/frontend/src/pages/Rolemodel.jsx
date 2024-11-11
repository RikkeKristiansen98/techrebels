import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../styles/rolemodel.css';
import textbackground from '../img/textbackground.png';

export const Rolemodel = () => {
  const { slug } = useParams(); // Hämta slug från URL
  const [rolemodel, setRolemodel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hämta specifik rollmodell baserat på slug
    fetch(`https://techforalla.se/wp-json/wp/v2/forebilder?slug=${slug}&_embed`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setRolemodel(data[0]); // Använd första posten från svaret
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching rolemodel:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Laddar...</p>;
  }

  if (!rolemodel) {
    return <p>Ingen förebild hittades.</p>;
  }

  return (
    <>
      <div className="container-first-section">
        <div className="hero-rolemodel">
          <h1>{rolemodel.title.rendered}</h1>
          <p>{rolemodel.acf?.short_description || 'Ingen kort beskrivning tillgänglig'}</p>
        </div>
        <div className="img-rolemodel">
          {rolemodel._embedded['wp:featuredmedia'] && (
            <img
              src={rolemodel._embedded['wp:featuredmedia'][0].source_url}
              alt={rolemodel.title.rendered}
            />
          )}
        </div>
      </div>
      <div
        className="container-second-section"
        style={{
          backgroundImage: `url(${textbackground})`
        }}
      >
        <div className="p-container">
          <p dangerouslySetInnerHTML={{ __html: rolemodel.content.rendered }} />
        </div>
      </div>
    </>
  );
};

export default Rolemodel;
