import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faHeading,
    faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

// Formuläret skickas via en POST-förfrågan till 
// WordPress Contact Form 7 REST API när användaren klickar på "Skicka tips".

const ContactForm = () => {

    // Denna funktion hanterar formulärinlämningen när användaren trycker på "Skicka tips".
    const formSubmissionHandler = async (event) => {
        // Förhindrar att formuläret skickas på vanligt sätt (genom att ladda om sidan).
        event.preventDefault();

        // Hämtar hela formulärelementet.
        const formElement = event.target;

        // Hämtar formulärets action-attribut som innehåller den URL där datan ska skickas.
        const { action } = formElement;

        // Skapar ett nytt FormData-objekt som tar hand om alla formulärdata som skickas med POST.
        const formData = new FormData(formElement);

        // Lägg till dolda Contact Form 7-fält för att integrera med WordPress Contact Form 7-plugin.
        const formId = "522"; // Unikt ID för det specifika formuläret i WordPress
        formData.append("_wpcf7", formId); // Fält som specificerar formulärets ID
        formData.append("_wpcf7_version", "5.6"); // Version av Contact Form 7-pluginet
        formData.append("_wpcf7_locale", "en_US"); // Språkinställningar för pluginet
        formData.append("_wpcf7_unit_tag", `wpcf7-f${formId}-o1`); // HTML-identifierare för formulärkomponenten
        formData.append("_wpcf7_container_post", "0"); // Specifierar att detta formulär inte är kopplat till en specifik post.

        try {
            // Använder fetch API för att skicka POST-förfrågan med formulärets data till servern (action-URL)
            const response = await fetch(action, {
                method: "POST", // POST-metoden används för att skicka data
                body: formData, // Inkluderar all formulärdata som skickas till servern
                headers: {
                    "Accept": "application/json", // Begär att svaret ska vara i JSON-format
                },
            });

            // Försöker konvertera svaret från servern till JSON
            const jsonResponse = await response.json();

            // Om mail inte skickas framgångsrikt, skrivs ett felmeddelande ut
            if (jsonResponse.status !== "mail_sent") {
                console.error("Validation error:", jsonResponse);
            } else {
                // Om allt går bra och mejlet skickas, loggas ett lyckat meddelande
                console.log("Form submitted successfully:", jsonResponse);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form
            action="https://www.techforalla.se/wp-json/contact-form-7/v1/contact-forms/522/feedback" // URL dit formulärdatan skickas
            method="post" // Formuläret använder POST-metoden för att skicka data
            encType="multipart/form-data" // Anger att formuläret kan hantera filuppladdningar (t.ex. bilagor)
            onSubmit={formSubmissionHandler} // Använder vår formSubmissionHandler för att hantera när formuläret skickas
            className="ml-12 grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-14 xl:w-[90%] 2xl:ml-28 xxs:gap-6"
        >
            {/* Name Field */}
            <div className="relative z-10 w-full xl:w-[124%] group flex items-center">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute xl:text-2xl xl:left-[-2%] xxs:left-[-10%] md:left-[4%] top-4 ml-[-15%] text-blackTheme"
                />
                <label
                    htmlFor="your-name"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Namn
                </label>
                <input
                    id="your-name" type="text" name="your-name" 
                    className="block xl:py-4 xxs:py-2.5 px-0 xl:w-[65%] xxs:w-[100%] md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required
                />
            </div>
            
            {/* Email Field */}
            <div className="relative z-10 w-full xl:w-[124%] group flex items-center">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute xl:text-2xl xl:left-[-2%] xxs:left-[-10%] md:left-[4%] top-4 ml-[-15%] text-blackTheme"
                />
                <label
                    htmlFor="your-email"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    E-post:
                </label>
                <input
                    id="your-email" type="email" name="your-email" 
                    className="block xl:py-4 xxs:py-2.5 px-0 xl:w-[65%] xxs:w-[100%] md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required 
                />
            </div>

            {/* Subject Field */}
            <div className="relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon
                    icon={faHeading}
                    className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] md:left-[6%] top-4 ml-[-20%] text-blackTheme"
                />
                <label
                    htmlFor="subject"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Ämne
                </label>
                <input
                    id="your-subject" type="text" name="your-subject" 
                    className="block xl:py-4 xxs:py-2.5 px-0 w-full md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required 
                />
            </div>

            {/* Message Field */}
            <div className="col-span-2 relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon
                    icon={faCommentDots}
                    className="absolute xl:text-2xl xl:left-0 xxs:left-[-2%] md:left-[3%] top-4 ml-[-10%] text-blackTheme"
                />
                <label
                    htmlFor="your-message"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Beskriv ditt tips här:
                </label>

                <textarea
                    id="your-message" name="your-message" 
                    className="block xl:py-4 xxs:py-2.5 px-0 md:w-[90%] w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required 
                />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex items-center justify-center mt-6 mr-12 2xl:mr-40">
                <button
                    type="submit"
                    className="z-10 text-blackTheme rounded-lg xl:text-2xl xxs:text-l transform transition-transform duration-300 ease hover:scale-110 bg-orange-500 font-semibold py-2 px-6 xl:border-4 xxs:border-[3px] border-blackTheme"
                >
                    Skicka tips
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
