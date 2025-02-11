import React from "react";
import { Link } from "react-router-dom";

const PromoSection = ({
    promo_header,
    promo_description,
    promo_link_title,
    promo_link_url,
    promo_image_url
}) => {
    const promoImage = promo_image_url;
    console.log("Image URL:", promo_image_url);


    return (

        <div className="promo-section flex h-96 bg-purpleTheme  relative flex-col sm:flex-row">

            {/* Text container */}
            <div className="text-container border h-full flex flex-col items-center justify-center w-full sm:w-1/2 relative overflow-hidden mb-2 sm:mb-0">
                <h2 className="header-1 text-4xl">{promo_header}</h2>
                <div className="link-description flex">{promo_description}</div>
            </div>
            {/* image link conatiner  */}
            <img
                src={promoImage}
                alt="Image of browser"
                className="absolute z-10 right-[15%] top-[15%] scale-[0.7] object-cover"
            />
            <Link
                className="header-2 flex items-center text-4xl transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                to={promo_link_url}
            >
                {promo_link_title}
                <svg
                    className="ml-2 mt-1"
                    fill="#FFFFFF"
                    height="25px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                >
                    <path
                        id="XMLID_222_"
                        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                    ></path>
                </svg>
            </Link>
        </div>
    );
};

export default PromoSection;
