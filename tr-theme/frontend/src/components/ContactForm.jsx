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
    const [formData, setFormData] = useState({
        email: '',
        category: '',
        ages: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState(null);
    const formId = "522";

    const handleFieldChange = (field, e) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const username = "wp_user";
        const password = "14uY xXFY ZGDF Q52K 8rhu ydY4";
        

        const response = await FormService.sendContactForm(formId, formData, username, password);

        if (response.success) {
            setStatus("Meddelande skickat!");
        } else {
            setStatus(`Fel: ${response.message}`);
        }
    };

    const categoriesOptions = ["Medicin", "programmering", "STEM", "Vetenskap", "Teknik", "Rymden", "Biologi", "Kemi", "Matematik", "Spel"];
    const agesOptions = ["6-9 år", "10-13 år", "14-18 år", "18+"];


    return (
        <form 
        _wpcf7_unit_tag= {formId}
        onSubmit={handleFormSubmit}
            className="ml-12 grid grid-cols-1 sm:grid-cols-2 xxs:grid-cols-2 xl:gap-14 xl:w-[90%] 2xl:ml-28 xxs:gap-6"
        >

            {/* Email Field */}
            <div className="relative z-10 w-full xl:w-[124%] group flex items-center">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute xl:text-2xl xl:left-[-2%] xxs:left-[-10%] md:left-[4%] top-4 ml-[-15%] text-blackTheme"
                />

                <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange("email", e)
                    }
                    placeholder=" "
                    className="block xl:py-4 xxs:py-2.5 px-0 xl:w-[65%] xxs:w-[100%] md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required
                />
                <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    E-post:
                </label>

            </div>

            {/* Kategori Field */}
            <div className="relative z-10 w-full group flex items-center">
                <FontAwesomeIcon icon={faList} className="absolute left-2 top-4 text-blackTheme" />
                <select
                    value={formData.category}
                    onChange={(e) => handleFieldChange("category", e)}
                    className="input-field"
                    required
                    >
                    <option value="" disabled>Välj kategori</option>
                    {categoriesOptions.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <label
                    htmlFor="floating_category"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Kategori:
                </label>

            </div>

            {/* subject Field */}
            <div className="relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon
                    icon={faHeading}
                    className="absolute xl:text-2xl xl:left-0 xxs:left-[-5%] md:left-[6%] top-4 ml-[-20%] text-blackTheme"
                />
                <input
                    type="text"
                    name="floating_subject"
                    id="floating_subject"
                    value={formData.subject}
                    onChange={(e) => handleFieldChange("subject", e)
                    }
                    placeholder=" "
                    className="block xl:py-4 xxs:py-2.5 px-0 w-full md:w-[80%] text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required
                />
                <label
                    htmlFor="floating_subject"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Ämne
                </label>

            </div>

            {/* Ålder Field */}
            <div className="relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon icon={faUser} className="absolute left-2 top-4 text-blackTheme" />
                <select value={formData.ages} onChange={(e) => handleFieldChange("ages", e)} className="input-field" required>
                    <option value="" disabled>Välj åldersgrupp</option>
                    {agesOptions.map((age) => (
                        <option key={age} value={age}>{age}</option>
                    ))}
                </select>
                <label
                    htmlFor="floating_ages"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Ålder:
                </label>

            </div>

            {/* Messageg Field */}
            <div className="col-span-2 relative z-10 w-full mb-5 group flex items-center">
                <FontAwesomeIcon
                    icon={faCommentDots}
                    className="absolute xl:text-2xl xl:left-0 xxs:left-[-2%] md:left-[3%] top-4 ml-[-10%] text-blackTheme"
                />
                <textarea
                    type="textarea"
                    name="floating_message"
                    id="floating_message"
                    value={formData.message}
                    onChange={(e) => handleFieldChange(
                        "message",
                        e
                    )
                    }
                    placeholder=" "
                    className="block xl:py-4 xxs:py-2.5 px-0 md:w-[90%] w-full text-lg text-blackTheme bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    required
                />
                <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute xl:text-2xl xxs:text-sm md:text-lg font-semibold text-blackTheme duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Beskriv ditt tips här:
                </label>

            </div>

            <div className="col-span-2 flex items-center justify-center mt-6 mr-12 2xl:mr-40">
                <button
                    type="submit"
                    value="send"
                    className="z-10 text-blackTheme rounded-lg xl:text-2xl xxs:text-l transform transition-transform duration-300 ease hover:scale-110 bg-orange-500 font-semibold py-2 px-6 xl:border-4 xxs:border-[3px] border-blackTheme"
                >
                    Skicka tips
                </button>
            </div>
        </form>
    );
};

export default ContactForm;