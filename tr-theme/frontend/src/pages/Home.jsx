import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import ExploreCategories from "../components/Home/ExploreCategories";
import "../components/Home/Home.css";

const Home = () => {
  // Sökvägar för tipsbilder
  const tipImagePaths = [
    "https://techforalla.se/images/image1.jpg",
    "https://techforalla.se/images/image2.jpg",
    "https://techforalla.se/images/image3.jpg",
    "https://techforalla.se/images/image4.jpg",
    "https://techforalla.se/images/image2.jpg",
    "https://techforalla.se/images/image3.jpg",
    "https://techforalla.se/images/image4.jpg",
  ];

  // Generera tips baserat på bilderna
  const tips = tipImagePaths.map((path, index) => ({
    imgUrl: path,
    title: `Tips ${index + 1}`,
  }));

  const shapes = [
    "https://techforalla.se/images/1.png",
    "https://techforalla.se/images/2.png",
  ];

  // Hantering av Carousel-index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tips.length : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === tips.length ? 0 : prevIndex + 1
    );
  };

  // Reset transition state after animation
  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection
        title="Hitta din nästa inspirationskälla!"
        introText="Välkommen till Tech För Alla! Här hittar du tips om allt från böcker
            till inspirerande förebilder. Registrera dig, spara dina
            favorit-tips och skapa egna önskelistor. Det är enkelt, snabbt och
            helt gratis. Börja upptäcka nya idéer och få inspiration redan idag!"
        shapes={shapes}
      />

      {/* Carousel Section */}
      <Carousel
        tips={tips}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Explore Categories Section */}
      <ExploreCategories />
    </div>
  );
};

export default Home;
