import React, { useState } from 'react';
import '../styles/tipsaoss.css'; // Importera CSS-filen

const TipsaOss = () => {
    const [email, setEmail] = useState('');
    const [kategori, setKategori] = useState('');
    const [titel, setTitel] = useState('');
    const [alder, setAlder] = useState('');
    const [beskrivning, setBeskrivning] = useState('');

    const [errors, setErrors] = useState({}); // Håll koll på fältens felmeddelanden

    // Validering och rensning av fel vid förändring
    const handleInputChange = (setter, fieldName, value) => {
        setter(value);

        // Rensa felmeddelandet för det aktuella fältet
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '' // Rensa specifikt fältets fel
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validering av fält
        const newErrors = {};
        if (!email) {
            newErrors.email = 'E-post krävs';
        }
        if (!kategori) {
            newErrors.kategori = 'Kategori krävs';
        }
        if (!titel) {
            newErrors.titel = 'Titel krävs';
        }
        if (!alder) {
            newErrors.alder = 'Ålder krävs';
        }
        if (!beskrivning) {
            newErrors.beskrivning = 'Beskrivning krävs';
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
        setEmail('');
        setKategori('');
        setTitel('');
        setAlder('');
        setBeskrivning('');
    };

    return (
        <div className="tipsaoss-container">
            <h1 className="tipsaoss-title">Tipsa oss</h1>
            <form className="tipsaoss-form" onSubmit={handleSubmit}>
                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="email">Din mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => handleInputChange(setEmail, 'email', e.target.value)}
                            placeholder="example@example.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="kategori">Kategori</label>
                        <input
                            type="text"
                            id="kategori"
                            value={kategori}
                            onChange={(e) => handleInputChange(setKategori, 'kategori', e.target.value)}
                        />
                        {errors.kategori && <span className="error-message">{errors.kategori}</span>}
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="titel">Titel</label>
                        <input
                            type="text"
                            id="titel"
                            value={titel}
                            onChange={(e) => handleInputChange(setTitel, 'titel', e.target.value)}
                        />
                        {errors.titel && <span className="error-message">{errors.titel}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="alder">Ålder</label>
                        <input
                            type="number"
                            id="alder"
                            value={alder}
                            onChange={(e) => handleInputChange(setAlder, 'alder', e.target.value)}
                        />
                        {errors.alder && <span className="error-message">{errors.alder}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="beskrivning">Beskriv tipset</label>
                    <textarea
                        id="beskrivning"
                        value={beskrivning}
                        onChange={(e) => handleInputChange(setBeskrivning, 'beskrivning', e.target.value)}
                        placeholder="Din beskrivning..."
                    />
                    {errors.beskrivning && <span className="error-message">{errors.beskrivning}</span>}
                </div>

                <button type="submit" className="submit-button">
                    Skicka
                </button>
            </form>
        </div>
    );
};

export default TipsaOss;
