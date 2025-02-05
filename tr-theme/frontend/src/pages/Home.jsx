import React from "react";
import { useHome } from "../contexts/HomeContext";
import HeroSection from "../components/Home/HeroSection";
import PromoSection from "../components/Home/PromoSection";
import Carousel from "../components/Home/Carousel";
import ExploreBanner from "../components/Home/ExploreBanner";
import Loading from "../components/Loading";


const Home = () => {
  const { hero, promo, banner, carouselItems, isLoading, error } = useHome();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const bannerIcons = [
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
    <div className="min-h-screen flex flex-col mx-auto">
      {/* Hero Section */}
      <HeroSection
        hero_header={hero.acf.hero_header || "Header could not be found"}
        hero_description={
          hero.acf.hero_description || "Description could not be found"
        }
        hero_link_url={hero.acf.hero_url || "/collection"}
        hero_link_title={hero.acf.hero_link_title || "Title could not be found"}
      />
      {/* Promo section */}
      <PromoSection 
          promo_header={promo.acf.promo_header || "Header could not be found"}
          promo_description={
            promo.acf.promo_description || "Description could not be found"
          }
          promo_link_url={promo.acf.promo_url || "/collection"}
          promo_link_title={promo.acf.promo_link_title || "Title could not be found"}
        />

      {/* Explore Categories Banner */}
      <ExploreBanner
        banner_header={banner.acf.banner_header}
        banner_tagline={banner.acf.banner_tagline}
        banner_icons={bannerIcons}
      />

      {/* Carousel Section */}
      <div className="flex items-center justify-center h-auto">
        <Carousel carouselItems={carouselItems} />
      </div>
    </div>
  );
};

export default Home;
