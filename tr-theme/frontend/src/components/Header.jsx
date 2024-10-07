import { NavLink } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
    return (
        <header>
              <div className="logo">Tech Rebels</div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
