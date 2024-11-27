import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages-styles/register.css";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    policy: false,
  });
  const [statusMessage, setStatusMessage] = useState(""); // State to manage feedback message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const getAdminToken = async () => {
    try {
      const response = await fetch(
        "http://techforalla.se/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "wp_user", // Replace with admin username
            password: "Q%LCF3NoM@", // Replace with admin password
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        return result.token; // Return the admin JWT token
      } else {
        console.error("Error getting admin token:", result);
        setStatusMessage("Error getting admin token.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error fetching admin token.");
    }
  };

  const registerUser = async () => {
    const adminToken = await getAdminToken(); // Get the admin token

    try {
      const response = await fetch(
        "http://techforalla.se/wp-json/wp/v2/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`, // Use the retrieved admin token
          },
          body: JSON.stringify({
            username: formData.email, // WordPress requires a 'username' field
            email: formData.email,
            password: formData.password,
            first_name: formData.firstName,
            last_name: formData.lastName,
          }),
        }
      );

      console.log("Response status:", response.status); // Log the status of the response
      console.log("Full response:", response); // Log the full response object

      if (response.ok) {
        const result = await response.json(); // Parse the JSON if response is OK
        console.log("User registered successfully:", result); // Log the parsed JSON result
        setStatusMessage("Registration successful!"); // Set success message
      } else {
        const errorResult = await response.json(); // Parse the error response
        console.error("Registration error:", errorResult);
        setStatusMessage("Registration failed: " + errorResult.message); // Show error message
      }
    } catch (error) {
      console.error("Error registering user:", error); // Log any network or parsing errors
      setStatusMessage("Registration error occurred.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.policy) {
      registerUser();
    } else {
      alert("You must agree to the privacy policy.");
    }
  };

  return (
    <div className="register_container">
      <h1 className="register-title">Registrera</h1>
      <div className="form-box">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="name-container">
            <div className="name-field">
              <label htmlFor="firstName" className="name-label">
                Namn:
              </label>
              <input
                type="text"
                id="firstName"
                className="register-form-input"
                placeholder="namn"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="last-name-field">
              <label htmlFor="lastName" className="name-label">
                Efternamn:
              </label>
              <input
                type="text"
                id="lastName"
                className="register-form-input"
                placeholder="efternamn"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label htmlFor="email" className="register-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="register-form-input"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="register-label">
            Lösenord:
          </label>
          <input
            type="password"
            id="password"
            className="register-form-input"
            placeholder="Lösenord"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="policy-content">
            <input
              type="checkbox"
              id="policy"
              className="register-policy"
              checked={formData.policy}
              onChange={(e) =>
                setFormData({ ...formData, policy: e.target.checked })
              }
              required
            />
            <label htmlFor="policy" className="register-policy-label">
              Jag godkänner{" "}
              <Link to="/policy">
                <span>integritetspolicyn</span>
              </Link>
            </label>
          </div>
          <button type="submit" className="register_btn">
            Registrera
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
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
};
