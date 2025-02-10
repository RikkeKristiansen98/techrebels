import React from "react";
import { Link } from "react-router-dom";

const PromoSection = ({
    promo_header,
    promo_description,
    promo_link_title,
    promo_link_url,
}) => {
    return (
        <div className="promo-section flex bg-purpleTheme h-96 relative flex-col sm:flex-row">
            {/* Text container */}
            <div className="text-container border h-full flex items-center justify-center w-full sm:w-1/2 relative overflow-hidden mb-2 sm:mb-0">
                <h2 className="header-1 text-4xl">{promo_header}</h2>
                <div className="link-description">{promo_description}</div>
                <div className="link-text mt-[7%] flex items-center justify-center text-center z-20 group">
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
            </div>
            {/*shape */}
            <div className="absolute top-0 right-0 w-full h-16 bg-blueTheme sm:w-[200%] sm:h-[200%] sm:rounded-full xxs:hidden xs:hidden sm:block"></div>
        </div>
    );
};

export default PromoSection;
