import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                    <li><NavLink to="/rolemodels">Rolemodels</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
