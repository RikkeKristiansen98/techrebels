import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/pages-styles/rolemodel.css";

const textImagePath = "https://techforalla.se/images/textbackground.png";

export const RolemodelPage = () => {
  const { slug } = useParams(); // Get slug from URL
  const [rolemodel, setRolemodel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch specific role model based on slug
    fetch(`https://techforalla.se/wp-json/wp/v2/forebilder?slug=${slug}&_embed`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setRolemodel(data[0]); // Use first item in response
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching role model:", error);
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
    <div className="rolemodel-page">
      <div className="rolemodel-header">
        <div className="rolemodel-text">
          <h1>{rolemodel.title.rendered}</h1>
          <p>
            {rolemodel.acf?.short_description ||
              "Ingen kort beskrivning tillgänglig"}
          </p>
        </div>
        <div className="rolemodel-image-wrapper">
          {rolemodel._embedded?.["wp:featuredmedia"] && (
            <img
              src={rolemodel._embedded["wp:featuredmedia"][0].source_url}
              alt={rolemodel.title.rendered}
              className="rolemodel-image"
            />
          )}
        </div>
      </div>

      <div className="rolemodel-main-text">
        <div
          dangerouslySetInnerHTML={{
            __html: rolemodel.acf?.main_text || rolemodel.content.rendered,
          }}
        />
      </div>

      <div
        className="rolemodel-bubble-text"
        style={{ backgroundImage: `url(${textImagePath})` }}
      >
        <p>
          {rolemodel.acf?.bubble_text ||
            "Här är en liten text som visas längst ner."}
        </p>
      </div>
    </div>
  );
};

export default RolemodelPage;
