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
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { hero, banner } = await HomeService.getHomePageWithSections();
        setHero(hero);
        setBanner(banner);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };
    fetchHomeData();
  }, []);

  if (!hero) {
    return <p>Laddar Hero-data...</p>;
  }
  const banner_icons = [
    {
      title: banner.acf.banner_icon_title_one,
      icon: banner.acf.banner_icon_image_url_one,
      URL: banner.acf.banner_icon_url_one,
    },
    {
      title: banner.acf.banner_icon_title_two,
      icon: banner.acf.banner_icon_image_url_two,
      URL: banner.acf.banner_icon_url_two,
    },
    {
      title: banner.acf.banner_icon_title_three,
      icon: banner.acf.banner_icon_image_url_three,
      URL: banner.acf.banner_icon_url_three,
    },
    {
      title: banner.acf.banner_icon_title_four,
      icon: banner.acf.banner_icon_image_url_four,
      URL: banner.acf.banner_icon_url_four,
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      {hero ? (
        <HeroSection
          hero_header={hero.acf.hero_header || "Header could not be found"}
          hero_description={
            hero.acf.hero_description || "Description could not be found"
          }
          hero_link_url={hero.acf.hero_url || "/"}
          hero_link_title={
            hero.acf.hero_link_title || "Title could not be found"
          }
        />
      ) : (
        <p>Laddar Hero-data...</p> // Visa en laddningsindikator
      )}

      {/* Explore Categories Section */}
      {banner ? (
        <ExploreCategories
          banner_header={banner.acf.banner_header}
          banner_tagline={banner.acf.banner_tagline}
          banner_icons={banner_icons}
        />
      ) : (
        <p>Laddar Banner-data...</p> // Visa en laddningsindikator
      )}

      {/* Carousel Section */}
      <div className="flex items-center justify-center h-auto p-5 px-10">
        <Carousel cards={cards} />
      </div>
    </div>
  );
};

export default Home;
