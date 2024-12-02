import React from "react";
import CarouselCard from "../components/Home/CarouselCard";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import ExploreCategories from "../components/Home/ExploreCategories";
import "../components/Home/Home.css";

const Home = () => {
  // Sökvägar för tipsbilder
  const cards = [
    "https://techforalla.se/images/image1.jpg",
    "https://techforalla.se/images/image2.jpg",
    "https://techforalla.se/images/image3.jpg",
    "https://techforalla.se/images/image4.jpg",
    "https://techforalla.se/images/image2.jpg",
    "https://techforalla.se/images/image3.jpg",
    "https://techforalla.se/images/image4.jpg",
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <HeroSection
        title="Hitta din nästa inspirationskälla!"
        introText="Välkommen till Tech För Alla! Här hittar du tips om allt från böcker
            till inspirerande förebilder. Registrera dig, spara dina
            favorit-tips och skapa egna önskelistor. Det är enkelt, snabbt och
            helt gratis. Börja upptäcka nya idéer och få inspiration redan idag!"
      />

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* Carousel Section */}
      <div className=" flex items-center justify-center h-auto p-5 px-10">
        <Carousel cards={cards} />
      </div>
    </div>
  );
};

export default Home;
