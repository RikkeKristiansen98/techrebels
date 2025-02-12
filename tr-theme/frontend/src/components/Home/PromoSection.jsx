import React from "react";
import { Link } from "react-router-dom";

const PromoSection = ({
    promo_header,
    promo_description,
    promo_link_title,
    promo_link_url,
    promo_image_url
}) => {
    const defaultImage = "http://techforalla.se/wp-content/uploads/2025/02/flowerguy.png";
    const heroElement = "http://techforalla.se/wp-content/uploads/2025/02/elementt-e1739367544311.png";

    return (
        <div className="relative promo-section flex flex-col items-center bg-orangeTheme h-auto lg:flex-row lg:items-start lg:justify-between py-10 md:py-[10%] lg:py-[7%] lg:pb-[10%]">
            {/* Image container */}
            <div className="image-container flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
                <img
                    src={promo_image_url || defaultImage}
                    alt="Promo"
                    className="w-60 md:w-64 lg:w-80 h-auto object-cover drop-shadow-lg"
                />
            </div>

            {/* Text container */}
            <div className="text-container flex-1 px-6 sm:px-[8%] lg:px-[10%] flex flex-col justify-center text-center lg:text-left mb-10 lg:mb-0">
                <h2 className="text-5xl text-whiteTheme font-bold mb-12 drop-shadow-lg">
                    {promo_header}
                </h2>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-blackTheme animate-slide-in-right">
                    {promo_description}
                </p>
                <div className="mt-8 flex justify-end">
                    <Link
                        className="bg-whiteTheme border-blackTheme border-2 shadow-[4px_4px_3px_rgba(0,0,0,0.6)] rounded-lg px-4 py-2 flex items-center text-blackTheme text-base sm:text-lg lg:text-xl font-bold transition-transform duration-200 ease-in-out hover:scale-95 active:scale-90"
                        to={promo_link_url}
                    >
                        {promo_link_title}
                    </Link>
                </div>
            </div>

            {/* Border element */}
            <img
                src={heroElement}
                alt="Hero Element"
                className="absolute bottom-0 right-0 z-0 w-full h-auto transform scale-y-[-1]"
            />
        </div>
    );
};

export default PromoSection;
