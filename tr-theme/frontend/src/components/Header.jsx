import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/header.css';

export const Header = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Hämta inlägg från WordPress API
        axios.get('https://techforalla.se/wp-json/wp/v2/posts')
            .then(response => {
                setPosts(response.data); // Spara inlägg i state
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <header>
            <div className="logo">Tech Rebels</div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>

                    {/* Dynamiska länkar för WordPress-inlägg */}
                    {posts.map(post => (
                        <li key={post.id}>
                            <a href={post.link}>{post.title.rendered}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;