import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const RolemodelPage = () => {
  const { slug } = useParams();
  const [rolemodel, setRolemodel] = useState(null);
  const [loading, setLoading] = useState(true);

  const borderElement = "http://techforalla.se/wp-content/uploads/2025/02/carousel-border-e1739376905245.png";
  const backgroundElement = "http://techforalla.se/wp-content/uploads/2025/02/Tech-Rebels-sidelement-4.png";

  useEffect(() => {
    fetch(`https://techforalla.se/wp-json/wp/v2/forebilder?slug=${slug}&_embed`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.length > 0) {
          setRolemodel(data[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching role model:", error);
        setLoading(false);
      });
  }, [slug]);

  const formatText = (text) => {
    return text.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

  if (loading) {
    return <p className="text-white">Laddar...</p>;
  }

  if (!rolemodel) {
    return <p className="text-white">Ingen förebild hittades.</p>;
  }

  return (
    <div className="bg-pinkTheme relative flex flex-col justify-center items-center h-auto w-full xxs:pt-24 xxs:px-3 md:pt-36 lg:pt-[5%] lg:px-[5%]">
      {/* Border element top */}
      
      {/* Image */}
      <div className="relative flex flex-col items-center w-full">
        {rolemodel._embedded?.["wp:featuredmedia"] && (
          <img
            src={rolemodel._embedded["wp:featuredmedia"][0].source_url}
            alt={rolemodel.title.rendered}
            className="flex flex-col items-center bg-whiteTheme p-4 border-4 border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)] 
              xxs:w-[250px] xs:w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />
        )}
      </div>
      
      {/* Text container */}
      <div className="relative w-full h-auto flex flex-col justify-center items-center py-6 px-5 text-center">
        {/* Title and Tagline */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl xxs:text-center xxs:mt-4 md:mt-4 md:text-3xl text-whiteTheme font-bold mb-5 drop-shadow-lg">
            {rolemodel.title.rendered}
          </h1>
          <p className="text-xl md:text-2xl text-whiteTheme">
            {rolemodel.acf?.rolemodel_tagline || "Ingen tagline tillgänglig"}
          </p>
        </div>

        {/* Description Section with dashed border */}
        <div className="w-full xxs:mt-12 p-6 border-dashed border-4 border-whiteTheme text-blackTheme leading-relaxed">
          {rolemodel.acf?.rolemodel_description
            ? formatText(rolemodel.acf.rolemodel_description)
            : formatText(rolemodel.content.rendered)}
        </div>
      </div>
    </div>
  );
};

export default RolemodelPage;
