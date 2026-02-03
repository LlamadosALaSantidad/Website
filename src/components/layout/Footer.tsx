import { Link } from "react-router-dom";
import Menu from "./Menu";
import SocialMenu from "../social/SocialMenu";
import { SITE_INFO } from "../../constants/site-info";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer_us">
                <Link to="/">
                    <img src="/images/icons/primaryLogo.svg" alt="logo" className="footer_logo"/>
                </Link>
                <p className="slogan">{SITE_INFO.slogan}</p>
                <SocialMenu className="footer_social" />
            </div>
            <nav className="foooter_nav">
                <h3>Navegación</h3>
                <Menu />
            </nav>
            <div className="footer_legal">
                <h3>Legal</h3>
                <ul className="legal_items">
                    <li>© {currentYear} {SITE_INFO.name}</li>
                    <li>Todos los derechos reservados.</li>
                    <li>Colombia</li>
                    <li>Diseñado para la Gloria de Dios.</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;