import React, { useState } from "react";
import FormService from "../services/FormService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faList,
    faHeading,
    faUser,
    faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        const formElement = event.target;
        const { action } = formElement;

        const formData = new FormData(formElement);

        formData.append("_wpcf7_unit_tag", `wpcf7-f522-o1`);

        // Annan metadata till formuläret wpcf7
        // formData.append("_wpcf7", "527"); // Form ID
        // formData.append("_wpcf7_locale", "en_US"); // Språk
        // formData.append("_wpcf7_container_post", "0"); // För säkerhet


        try {
            const response = await fetch(action, {
                method: "POST",
                body: formData,
                headers: {
                    // "Authorization": `Basic ${encodedCredentials}`,
                    "Accept": "application/json",
                },
            });

            const jsonResponse = await response.json();

            if (jsonResponse.status !== "mail_sent") {
                console.error("Validation error:", jsonResponse);
            } else {
                console.log("Form submitted successfully:", jsonResponse);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const categoriesOptions = ["Medicin", "programmering", "STEM", "Vetenskap", "Teknik", "Rymden", "Biologi", "Kemi", "Matematik", "Spel"];
    const agesOptions = ["6-9 år", "10-13 år", "14-18 år", "18+"];


    return (
        <form
            action="https://www.techforalla.se/wp-json/contact-form-7/v1/contact-forms/522/feedback"
            method="post"
            encType="multipart/form-data"
            onSubmit={formSubmissionHandler}
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
                    input id="your-name" type="text" name="your-name"
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

            {/* Kategori Field */}
            {/* <div className="relative z-10 w-full group flex items-center">
                <FontAwesomeIcon icon={faList} className="absolute left-2 top-4 text-blackTheme" />
                <label
                    htmlFor="your-categories"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Kategori:
                </label>
                <select
                    type="select"
                    name="your-categories"
                    id="your-categories"
                    className="input-field"
                    required
                >
                    <option value="" disabled>Välj kategori</option>
                    {categoriesOptions.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div> */}

            {/* subject Field */}
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

            {/* Ålder Field */}
            {/* <div className="relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon icon={faUser} className="absolute left-2 top-4 text-blackTheme" />
                <select
                    type="select"
                    name="your-ages"
                    id="your-ages"
                    className="input-field"
                    required>
                    <option value="" disabled>Välj åldersgrupp</option>
                    {agesOptions.map((age) => (
                        <option key={age} value={age}>{age}</option>
                    ))}
                </select>
                <label
                    htmlFor="your-ages"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Ålder:
                </label>

            </div> */}

            {/* Messageg Field */}
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