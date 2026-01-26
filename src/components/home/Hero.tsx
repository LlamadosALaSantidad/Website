import { SITE_INFO } from "../../constants/site-info";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";

function Hero() {
    return (
        <section className="hero">
            <span className="badge">Bienvenidos peregrinos</span>
            <h1>Descubre la belleza de la <span>Santidad</span></h1>
            <p>{SITE_INFO.description}</p>
            <div className="buttons">
                <button><Link to={PATHS.SAINTS}>Explorar Santos</Link></button>
                <button><Link to={PATHS.MIRACLES}>Ver Milagros</Link></button>
            </div>
        </section>
    );
}

export default Hero;