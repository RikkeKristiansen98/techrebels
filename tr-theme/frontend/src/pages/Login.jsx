import { useState } from 'react';
import '../styles/pages-styles/login.css';

export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://techforalla.se/wp-json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.email, // 'username' can be email or username
                    password: formData.password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Login successful:', result);
                // Store the JWT token in localStorage
                localStorage.setItem('token', result.token);
                alert('Login successful!');
            } else {
                console.error('Login error:', result);
                alert('Login failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    };

    return (
        <div className="login_container">
            <h1 className="login-title">Logga in</h1>
            <div className="form-box">
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password" className="form-label">Lösenord:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Lösenord"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="login_btn">Logga in</button>
                </form>
            </div>
            <div className="login-svg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#475841"
            d="M43.1,-59.3C52.2,-52.7,53.4,-35.2,59.9,-18.6C66.4,-2.1,78.1,13.6,76.6,26.9C75,40.3,60.2,51.3,45.2,56.8C30.2,62.3,15.1,62.3,1,61C-13.2,59.7,-26.4,57.1,-35,49.5C-43.6,41.9,-47.6,29.3,-56.6,15.2C-65.7,1,-79.7,-14.7,-80.1,-29.9C-80.5,-45.1,-67.3,-59.8,-51.7,-64.3C-36.1,-68.8,-18,-63.2,-0.5,-62.4C17,-61.7,34,-65.9,43.1,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="login-svg2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#CA8787"
            d="M25.3,-30.7C34.5,-22.5,44.7,-16.1,49.7,-6.1C54.6,3.9,54.2,17.5,48.4,28.4C42.7,39.4,31.5,47.7,19.6,50.7C7.7,53.6,-5,51.2,-20.5,48.8C-35.9,46.4,-54.1,44.1,-55.7,35.1C-57.4,26.2,-42.4,10.7,-37.8,-5.1C-33.1,-20.8,-38.7,-36.8,-34.1,-45.8C-29.5,-54.9,-14.8,-57,-3.3,-53C8.1,-49,16.1,-38.9,25.3,-30.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
        </div>
    );
}
