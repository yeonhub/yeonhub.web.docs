import './Header.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header">
            <div className="inner">
                <h1><Link to="/"><img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="steam" /></Link></h1>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;