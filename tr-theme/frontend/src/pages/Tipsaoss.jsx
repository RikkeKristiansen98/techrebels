import React, { useState } from "react";
import "../styles/pages-styles/tipsaoss.css"; // Importera CSS-filen

const TipsaOss = () => {
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState("");
  const [titel, setTitel] = useState("");
  const [alder, setAlder] = useState("");
  const [beskrivning, setBeskrivning] = useState("");

  const [errors, setErrors] = useState({}); // Håll koll på fältens felmeddelanden

  // Validering och rensning av fel vid förändring
  const handleInputChange = (setter, fieldName, value) => {
    setter(value);

    // Rensa felmeddelandet för det aktuella fältet
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "", // Rensa specifikt fältets fel
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validering av fält
    const newErrors = {};
    if (!email) {
      newErrors.email = "E-post krävs";
    }
    if (!kategori) {
      newErrors.kategori = "Kategori krävs";
    }
    if (!titel) {
      newErrors.titel = "Titel krävs";
    }
    if (!alder) {
      newErrors.alder = "Ålder krävs";
    }
    if (!beskrivning) {
      newErrors.beskrivning = "Beskrivning krävs";
    }

    // Om det finns några fel, sätt errors state och skicka inte formuläret
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Om alla fält är ifyllda, logga resultatet
    console.log({ email, kategori, titel, alder, beskrivning });

    // Rensa felmeddelandena och fältens värden efter lyckad inskickning
    setErrors({});
    setEmail("");
    setKategori("");
    setTitel("");
    setAlder("");
    setBeskrivning("");
  };

  return (
    <div className="tipsaoss-container">
      <h1 className="tipsaoss-title">Tipsa oss</h1>
      <form className="tipsaoss-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email">Din epost</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) =>
                handleInputChange(setEmail, "email", e.target.value)
              }
              placeholder="example@example.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="kategori">Kategori</label>
            <input
              type="text"
              id="kategori"
              value={kategori}
              onChange={(e) =>
                handleInputChange(setKategori, "kategori", e.target.value)
              }
            />
            {errors.kategori && (
              <span className="error-message">{errors.kategori}</span>
            )}
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="titel">Titel</label>
            <input
              type="text"
              id="titel"
              value={titel}
              onChange={(e) =>
                handleInputChange(setTitel, "titel", e.target.value)
              }
            />
            {errors.titel && (
              <span className="error-message">{errors.titel}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="alder">Ålder</label>
            <input
              type="number"
              id="alder"
              value={alder}
              onChange={(e) =>
                handleInputChange(setAlder, "alder", e.target.value)
              }
            />
            {errors.alder && (
              <span className="error-message">{errors.alder}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="beskrivning">Beskriv tipset</label>
          <textarea
            id="beskrivning"
            value={beskrivning}
            onChange={(e) =>
              handleInputChange(setBeskrivning, "beskrivning", e.target.value)
            }
            placeholder="Din beskrivning..."
          />
          {errors.beskrivning && (
            <span className="error-message">{errors.beskrivning}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Skicka
        </button>
      </form>
      <div className="tipsaoss-svg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#475841"
            d="M43.1,-59.3C52.2,-52.7,53.4,-35.2,59.9,-18.6C66.4,-2.1,78.1,13.6,76.6,26.9C75,40.3,60.2,51.3,45.2,56.8C30.2,62.3,15.1,62.3,1,61C-13.2,59.7,-26.4,57.1,-35,49.5C-43.6,41.9,-47.6,29.3,-56.6,15.2C-65.7,1,-79.7,-14.7,-80.1,-29.9C-80.5,-45.1,-67.3,-59.8,-51.7,-64.3C-36.1,-68.8,-18,-63.2,-0.5,-62.4C17,-61.7,34,-65.9,43.1,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="tipsaoss-svg2">
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

export default TipsaOss;
