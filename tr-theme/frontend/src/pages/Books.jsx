import { useState } from 'react';
import '../styles/books.css';
// import Image1 from '../img/1.png';
// import Image2 from '../img/2.png';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const Books = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [subjectOpen, setSubjectOpen] = useState(false);

    const Image1 = `${window.location.origin}/wp-content/themes/tr-theme/tr-theme/frontend/dist/assets/1-DgN4-qfm.png`;
   const Image2 = `${window.location.origin}/wp-content/themes/tr-theme/tr-theme/frontend/dist/assets/2-BPtoIZwi.png`;
    return (
        <div className='books-container'>
            <h1 className='main-title'>Böcker</h1>
            <div className="books-hero">
                <div className="book-shape-wrapper">
                    {/* Shape images */}
                    <img src={Image1} alt="Shape 1" className="book-shape1 book-shape" />
                    <img src={Image2} alt="Shape 2" className="book-shape2 book-shape" />
                    
                    <div className='search-bar'>
                        <input type="text" placeholder='Sök...' className='search-input'/>
                        <button className='search-button'>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="books-content">
                <aside className="books-filter">
                    <h2>Filter</h2>

                    {/* Category Filter */}
                    <div className={`category ${categoryOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setCategoryOpen(!categoryOpen)}>
                            Kategori
                            {categoryOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Age Filter */}
                    <div className={`age ${ageOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setAgeOpen(!ageOpen)}>
                            Ålder
                            {ageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Language Filter */}
                    <div className={`language ${languageOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setLanguageOpen(!languageOpen)}>
                            Språk
                            {languageOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>

                    {/* Subject Filter */}
                    <div className={`subject ${subjectOpen ? 'open' : ''}`}>
                        <h4 onClick={() => setSubjectOpen(!subjectOpen)}>
                            Ämne
                            {subjectOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </h4>
                        <div className="list">
                            <input type="checkbox" /> Option 1
                            <input type="checkbox" /> Option 2
                            <input type="checkbox" /> Option 3
                        </div>
                    </div>
                </aside>

                <section className='grid-container'>
                    {/* Placeholder book items */}
                    <div className="book-item">
                        <img src="https://via.placeholder.com/150" alt="test photo" />
                        <h3>Title</h3>
                    </div>
                    <div className="book-item">
                        <img src="https://via.placeholder.com/150" alt="test photo" />
                        <h3>Title</h3>
                    </div> 
                    <div className="book-item">
                        <img src="https://via.placeholder.com/150" alt="test photo" />
                        <h3>Title</h3>
                    </div>
                </section>
            </div>
        </div>
    );
};
