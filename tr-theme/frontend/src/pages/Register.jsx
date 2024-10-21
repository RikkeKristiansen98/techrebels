import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        policy: false,
    });
    const [statusMessage, setStatusMessage] = useState(''); // State to manage feedback message

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const getAdminToken = async () => {
        try {
            const response = await fetch('http://techforalla.se/wp-json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'wp_user',  // Replace with admin username
                    password: 'Q%LCF3NoM@',  // Replace with admin password
                }),
            });
    
            const result = await response.json();
            if (response.ok) {
                return result.token; // Return the admin JWT token
            } else {
                console.error('Error getting admin token:', result);
                setStatusMessage('Error getting admin token.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('Error fetching admin token.');
        }
    };

    const registerUser = async () => {
        const adminToken = await getAdminToken(); // Get the admin token
    
        try {
            const response = await fetch('http://techforalla.se/wp-json/wp/v2/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`, // Use the retrieved admin token
                },
                body: JSON.stringify({
                    username: formData.email, // WordPress requires a 'username' field
                    email: formData.email,
                    password: formData.password,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                }),
            });
    
            console.log('Response status:', response.status); // Log the status of the response
            console.log('Full response:', response);          // Log the full response object
    
            if (response.ok) {
                const result = await response.json();         // Parse the JSON if response is OK
                console.log('User registered successfully:', result); // Log the parsed JSON result
                setStatusMessage('Registration successful!');  // Set success message
            } else {
                const errorResult = await response.json();    // Parse the error response
                console.error('Registration error:', errorResult);
                setStatusMessage('Registration failed: ' + errorResult.message); // Show error message
            }
        } catch (error) {
            console.error('Error registering user:', error);   // Log any network or parsing errors
            setStatusMessage('Registration error occurred.');
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.policy) {
            registerUser();
        } else {
            alert('You must agree to the privacy policy.');
        }
    };

    return (
        <div className="register_container">
            <h1 className="register-title">Register</h1>
            <div className="form-box">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="register-label">Namn:</label>
                    <input
                        type="text"
                        id="firstName"
                        className="register-form-input"
                        placeholder="namn"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="lastName" className="register-label">Efternamn:</label>
                    <input
                        type="text"
                        id="lastName"
                        className="register-form-input"
                        placeholder="efternamn"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email" className="register-label">email:</label>
                    <input
                        type="email"
                        id="email"
                        className="register-form-input"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password" className="register-label">Lösenord:</label>
                    <input
                        type="password"
                        id="password"
                        className="register-form-input"
                        placeholder="Lösenord"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="policy" className="register-policy-label">
                        Jag godkänner <Link to="/policy">integritetspolicyn</Link>
                    </label>
                    <input
                        type="checkbox"
                        id="policy"
                        className="register-policy"
                        checked={formData.policy}
                        onChange={(e) => setFormData({ ...formData, policy: e.target.checked })}
                        required
                    />
                    <button type="submit" className="register_btn">Registrera</button>
                </form>
                {statusMessage && <p className="status-message">{statusMessage}</p>}
            </div>
        </div>
    );
};
