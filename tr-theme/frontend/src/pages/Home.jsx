import React, { useEffect, useState } from "react";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import ExploreCategories from "../components/Home/ExploreCategories";
import Loading from "../components/Loading";
import HomeService from "../services/HomeService";

const Home = () => {
  const [data, setData] = useState({ hero: null, banner: null, carouselItems: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const result = await HomeService.getHomePageWithSections();
        console.log("Fetched homepage data:", result);

        setData(result);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return <Loading />;
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
      <div className="min-h-screen flex flex-col mx-auto">
        {/* Hero Section */}
        <HeroSection
          hero_header={hero.hero_header || "Header could not be found"}
          hero_description={hero.hero_description || "Description could not be found"}
          hero_link_url={hero.hero_url || "/"}
          hero_link_title={hero.hero_link_title || "Title could not be found"}
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
