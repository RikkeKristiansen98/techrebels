import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import ExploreCategories from "../components/Home/ExploreCategories";
import "../components/Home/Home.css";
import HomeService from "../services/HomeService";
import { useEffect, useState } from "react";

const Home = () => {

  console.log("Rendering Home component");

  const [data, setData] = useState({hero: null, banner: null, carouselItems: []});

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const result = await HomeService.getHomePageWithSections();
        console.log("Fetched homepage data:", result);
  
        // Förhindra onödig rendering
        if (JSON.stringify(result) !== JSON.stringify(data)) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      }
    };
  
    fetchHomeData();
  }, []);
  
  


  if (!data.hero || !data.banner) {
    return <p>Laddar Hero-data...</p>;
  }

  const hero = data.hero.acf;
  const banner = data.banner.acf;


  const banner_icons = [
    {
      title: banner.banner_icon_title_one,
      icon: banner.banner_icon_image_url_one,
      URL: banner.banner_icon_url_one,
    },
    {
      title: banner.banner_icon_title_two,
      icon: banner.banner_icon_image_url_two,
      URL: banner.banner_icon_url_two,
    },
    {
      title: banner.banner_icon_title_three,
      icon: banner.banner_icon_image_url_three,
      URL: banner.banner_icon_url_three,
    },
    {
      title: banner.banner_icon_title_four,
      icon: banner.banner_icon_image_url_four,
      URL: banner.banner_icon_url_four,
    },
  ];

  return (
    <> 
    <div className="home-container">
      {/* Hero Section */}
        <HeroSection
          hero_header={hero.hero_header || "Header could not be found"}
          hero_description={
            hero.hero_description || "Description could not be found"
          }
          hero_link_url={hero.hero_url || "/"}
          hero_link_title={
            hero.hero_link_title || "Title could not be found"
          }
        />

      {/* Explore Categories Section */}
        <ExploreCategories
          banner_header={banner.banner_header}
          banner_tagline={banner.banner_tagline}
          banner_icons={banner_icons}
        />
        
      {/* Carousel Section */}
      <div className="flex items-center justify-center h-auto p-5 px-10">
      <Carousel carouselItems={data.carouselItems} />

      </div>
    </div>
    </>
  );
};

export default Home;
