import React, { useState } from "react";
import TypingEffect from "react-typing-effect";
import ContactForm from "../components/ContactForm";
import TestForm from "../components/TestForm";

const TipsaOss = () => {
  const sideImage =
    "http://techforalla.se/wp-content/uploads/2025/02/element-flowerss-e1739377698139.png";


  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-yellowTheme">
      <div className="flex flex-col justify-center items-center xxs:w-[85%] xxs:mb-[20%] xxs:mt-[10%] md:w-[60%] md:mt-[1%] xl:mt-[10%] xl:h-[30%] xl:w-[50%]">
        <h1 className="xl:text-4xl xxs:text-3xl xxs:mb-[7px] xxs:mt-[8px] md:text-3xl xl:mb-[30px] xl:mt-[-30px] text-center font-bold text-blackTheme">
          <div className="relative" style={{ height: "4.5rem" }}>
            <TypingEffect
              text="Vill du skicka in tips till oss?"
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </div>
        </h1>

        <div className="relative flex justify-center items-center w-full xxs:p-10 xxs:py-16 2xl:py-28 bg-pinkTheme xl:border-4 xxs:border-[3px] border-blackTheme shadow-[4px_4px_3px_rgba(0,0,0,0.6)]">
          {/* Blommor */}
          <div className="absolute top-0 right-0 md:w-[50%] md:h-[100%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" loading="lazy" className="max-w-full h-auto" />
          </div>

          {/* Test Form */}
          {/* <div className="relative z-10">
            <TestForm />
          </div> */}

          {/* Contact Form  */}
          <ContactForm />

          {/* Blommor */}
          <div className="absolute top-0 left-0 md:w-[50%] md:h-[100%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" loading="lazy" className="max-w-full h-auto" />
          </div>
          <div className="absolute bottom-0 right-0 md:w-[50%] xl:overflow-hidden">
            <img src={sideImage} alt="blommor" loading="lazy" className="max-w-full h-auto" />
          </div>
          <div className="absolute bottom-0 left-0 md:w-[50%] xl:overflow-hidden">
            <img src={sideImage} loading="lazy" alt="blommor" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsaOss;
