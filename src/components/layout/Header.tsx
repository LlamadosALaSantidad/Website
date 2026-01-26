import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

	return (
        <header>
            <div className="header_logo">
                <Link to="/">
                    <img src="" alt="logo" className="header_logo"/>
                </Link>
            </div>
            <button
                className="navbar_toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu">
                <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995" stroke-width="1"/></svg>
                </div>
            </button>
            <nav className={`header_menu ${isOpen ? 'active' : ''}`}>
                <button className={`close_nav ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l6 6m0-6l-6 6" stroke-width="1"/></svg>
                </button>
                <Menu />
            </nav>
        </header>
	);
}

export default Header;