import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import ExploreCategories from "../components/Home/ExploreCategories";
import "../components/Home/Home.css";
import HomeService from "../services/HomeService";
import { useEffect, useState } from "react";

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

  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { hero } = await HomeService.getHomePageWithHero();
        setHero(hero); // Spara Hero-data i state
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };

    fetchHomeData();
  }, []);

  if (!hero) {
    return <p>Laddar Hero-data...</p>;
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      {hero ? (
        <HeroSection
          hero_title={hero.acf.hero_title || "Title could not be found"}
          hero_description={hero.acf.hero_description || "Description could not be found"}
          hero_link_url= {hero.acf.hero_url || "/"}
          hero_link_title= {hero.acf.hero_link_title || "Title could not be found"}
          
        />
      ) : (
        <p>Laddar Hero-data...</p> // Visa en laddningsindikator
      )}

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* Carousel Section */}
      <div className="flex items-center justify-center h-auto p-5 px-10">
        <Carousel cards={cards} />
      </div>
    </div>
  );
};

export default Home;
