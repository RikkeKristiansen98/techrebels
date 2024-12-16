// import React, { useEffect, useState } from "react";

// const CarouselItem = ({ carouselItem, imageCache }) => {
//   const [content, setContent] = useState({
//     header: "",
//     imageSrc: "",
//     isLoaded: false,
//   });

//   // Dynamisk funktion för att hitta rätt fält från ACF
//   const findDynamicField = (acf, fieldType) => {
//     const fieldKey = Object.keys(acf || {}).find((key) =>
//       key.toLowerCase().includes(fieldType.toLowerCase())
//     );
//     return fieldKey ? acf[fieldKey] : null;
//   };


//   // Hämta både header och bild och sätt in i state när båda är färdiga
//   useEffect(() => {
//     const fetchContent = async () => {
//       const header = findDynamicField(carouselItem.acf, "header") || "Header could not be found";
//       const imageId = findDynamicField(carouselItem.acf, "image");

//       if (imageId) {
//         try {
//           // Försök att hämta bilden från cache om den finns där
//           const imageSrc = await getImageById(imageId);
          
//           setContent({
//             header,
//             imageSrc,
//             isLoaded: true, // Sätt detta till true när både är laddade
//           });
//         } catch (error) {
//           console.error("Error fetching content:", error);
//         }
//       }
//     };

//     fetchContent();
//   }, [carouselItem, imageCache]);

//   return (
//     <div className="w-full h-54 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group">
//       {/* Visa en laddningsindikator tills båda är inladdade */}
//       {content.isLoaded ? (
//         <>
//           {/* Bild */}
//           <img
//             src={content.imageSrc}
//             alt="Carousel Item"
//             className="w-full h-54 object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
//           {/* Header */}
//           <h2 className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {content.header}
//           </h2>
//         </>
//       ) : (
//         <div className="w-full h-54 bg-gray-200 flex items-center justify-center">
//           Loading content...
//         </div>
//       )}
//     </div>
//   );
// };

// export default CarouselItem;

import React from "react";

const CarouselItem = ({ header, imageSrc }) => {
  return (
    <div className="w-full h-54 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer relative overflow-hidden group">
      {/* Visa en laddningsindikator tills både header och bild är laddade */}
      {header && imageSrc ? (
        <>
          {/* Bild */}
          <img
            src={imageSrc}
            alt="Carousel Item"
            className="w-full h-54 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
          {/* Header */}
          <h2 className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {header}
          </h2>
        </>
      ) : (
        <div className="w-full h-54 bg-gray-200 flex items-center justify-center">
          Loading content...
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
