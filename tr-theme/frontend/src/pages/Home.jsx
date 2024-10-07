import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8082/wp-json/wp/v2/posts') 
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <main>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
      </main>
    </div>
  );
};

export default Home;
