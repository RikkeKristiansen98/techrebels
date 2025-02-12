import React from "react";
import { Link } from "react-router-dom";

const PromoSection = ({
    promo_header,
    promo_description,
    promo_link_title,
    promo_link_url,
    promo_image_url
}) => {
    const defaultImage = "http://techforalla.se/wp-content/uploads/2025/02/datatjej.png";

    return (
        <div className="promo-section flex flex-col sm:flex-row items-center bg-purpleTheme h-auto sm:h-96 p-6">
            {/* Image container */}
            <div className="image-container flex justify-center sm:justify-end">
                <img
                    src={promo_image_url || defaultImage}
                    alt="Promo"
                    className="max-w-full h-64 sm:h-80 object-cover drop-shadow-lg"
                />
            </div>



            {/* link container */}
            {/* Text container */}
            <div className="text-container h-full px-[8%] flex flex-col justify-center w-full sm:w-1/2 relative mb-2 sm:mb-0">
                <h2 className="text-4xl font-bold">{promo_header}</h2>
                <p className="text-lg">{promo_description}</p> <Link
                    className="header-2 mt-4 sm:mt-0 sm:ml-4 flex items-center text-4xl transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    to={promo_link_url}
                >
                    {promo_link_title}
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </Link>
            </div>
            {/* Link */}

        </div>
    );
};

export default PromoSection;