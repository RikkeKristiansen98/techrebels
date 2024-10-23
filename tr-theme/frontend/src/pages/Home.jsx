import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import form1 from '../img/1.png'; // Första bakgrundsformen
import form2 from '../img/2.png'; // Andra bakgrundsformen
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tips = [
    {
      imgUrl: image1,
      title: 'Tips 1',
    },
    {
      imgUrl: image2,
      title: 'Tips 2',
    },
    {
      imgUrl: image3,
      title: 'Tips 3',
    },
    {
      imgUrl: image4,
      title: 'Tips 4',
    },
    {
      imgUrl: image4,
      title: 'Tips 5',
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
          <img src={tips[index].imgUrl} alt={tips[index].title} className="tip-image" />
          <p>{tips[index].title}</p>
        </div>
        );
      }
  
      return tipItems;
    };
 
  useEffect(() => {
    fetch('http://localhost:8082/wp-json/wp/v2/posts') 
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    
    <div className="home-container">
      <h1 className="home-title">Hitta din nästa inspirationskälla!</h1>
      <p className="intro-text">
      Välkommen till Tech För Alla! Här hittar du tips om allt från böcker till inspirerande förebilder. 
      Registrera dig, spara dina favorit-tips och skapa egna önskelistor. Det är enkelt, snabbt och helt gratis. 
      Börja upptäcka nya idéer och få inspiration redan idag!
    </p>
      {/* Hero Section */}
      <div className="hero">
        <div className="shape-wrapper">
          <img src={form1} alt="Form 1" className="shape1" />
          <img src={form2} alt="Form 2" className="shape2" />
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
           <p>Registrera dig för att kunna skicka in tips, skapa önskelistor och mer!</p>
           <h3>Förebilder</h3>
          <p>Läs om historiens förebilder!</p>
        </div>
      <div className="categories">
        <div className="category-btn">Böcker</div>
        <div className="category-btn">Media</div>
        <div className="category-btn"><Link to="/toys" className="link-text">Leksaker</Link></div>
        <div className="category-btn">Föreningar</div>
      </div>
      </div>
    </div>


  );
};

export default Home;
