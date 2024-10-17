import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import form1 from '../img/1.png'; // Första bakgrundsformen
import form2 from '../img/2.png'; // Andra bakgrundsformen

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/wp-json/wp/v2/posts') 
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    
    <div className="home-container">
      <h1 className="home-title">Hitta din nästa inspirationskälla!</h1>

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
      <div className="tips-carousel">
        <h2>Tech Rebels tipsar</h2>
        <ul>
          {posts.length > 0 ? (
            posts.map(post => (
              <li key={post.id}>{post.title.rendered}</li>
            ))
          ) : (
            <div className="tip-boxes">
              <div className="tip-box">Tips 1 (Placeholder)</div>
              <div className="tip-box">Tips 2 (Placeholder)</div>
              <div className="tip-box">Tips 3 (Placeholder)</div>
            </div>
          )}
        </ul>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <div className="category-btn">Böcker</div>
        <div className="category-btn">Media</div>
        <div className="category-btn">Leksaker</div>
        <div className="category-btn">Föreningar</div>
      </div>
    </div>


  );
};

export default Home;
