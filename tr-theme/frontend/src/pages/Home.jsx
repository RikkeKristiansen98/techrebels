import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const blobOnePath = "https://techforalla.se/images/1.png";
const blobTwoPath = "https://techforalla.se/images/2.png";
const tipImageOnePath = "https://techforalla.se/images/image1.jpg";
const tipImageTwoPath = "https://techforalla.se/images/image2.jpg";
const tipImageThreePath = "https://techforalla.se/images/image3.jpg";
const tipImageFourPath = "https://techforalla.se/images/image4.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tips = [
    {
      imgUrl: tipImageOnePath,
      title: "Tips 1",
    },
    {
      imgUrl: tipImageTwoPath,
      title: "Tips 2",
    },
    {
      imgUrl: tipImageThreePath,
      title: "Tips 3",
    },
    {
      imgUrl: tipImageFourPath,
      title: "Tips 4",
    },
    {
      imgUrl: tipImageOnePath,
      title: "Tips 5",
    },
  ];

  // Gå till föregående tips
  const prevSlide = () => {
    const lastIndex = tips.length - 1;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  // Gå till nästa tips
  const nextSlide = () => {
    const resetIndex = currentIndex === tips.length - 1;
    const index = resetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  // Renderar tips i en "loop"
  const renderTips = () => {
    const slidesToShow = 4; // Antal synliga slides
    const tipItems = [];

    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % tips.length;
      tipItems.push(
        <div key={index} className="tip-item">
          <img
            src={tips[index].imgUrl}
            alt={tips[index].title}
            className="tip-image"
          />
          <p>{tips[index].title}</p>
        </div>
      );
    }

    return tipItems;
  };

  useEffect(() => {
    fetch("https://techforalla.se/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Hitta din nästa inspirationskälla!</h1>
      <p className="intro-text">
        Välkommen till Tech För Alla! Här hittar du tips om allt från böcker
        till inspirerande förebilder. Registrera dig, spara dina favorit-tips
        och skapa egna önskelistor. Det är enkelt, snabbt och helt gratis. Börja
        upptäcka nya idéer och få inspiration redan idag!
      </p>
      {/* Hero Section */}
      <div className="hero">
        <div className="shape-wrapper">
          <img src={blobOnePath} className="shape1" alt="Dekorativ form 1" />
          <img src={blobTwoPath} className="shape2" alt="Dekorativ form 2" />
        </div>
        <div className="search-area">
          <input type="text" placeholder="Sök efter tips..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      {/* Tips Section */}
      <div className="carousel">
        <h2>Tech Rebels tipsar</h2>
        <div className="carousel-wrapper">
          <button className="arrow left" onClick={prevSlide}>
            ←
          </button>
          <div className="tips-carousel">{renderTips()}</div>
          <button className="arrow right" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-container">
        <div className="category-text">
          <h3>Skicka in tips</h3>
          <p>
            Registrera dig för att kunna skicka in tips, skapa önskelistor och
            mer!
          </p>
          <h3>Förebilder</h3>
          <p>Läs om historiens förebilder!</p>
        </div>
        <div className="categories">
          <div className="category-btn">
            <Link to="/books" className="link-text">
              Böcker
            </Link>
          </div>
          <div className="category-btn">Media</div>
          <div className="category-btn">
            <Link to="/toys" className="link-text">
              Leksaker
            </Link>
          </div>
          <div className="category-btn">Föreningar</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
