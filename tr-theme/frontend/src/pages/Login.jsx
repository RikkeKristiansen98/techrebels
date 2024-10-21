import { useState } from 'react';
import '../styles/login.css';

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
        </div>
    );
}
