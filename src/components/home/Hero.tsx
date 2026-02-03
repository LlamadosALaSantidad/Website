import { SITE_INFO } from "../../constants/site-info";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";
import Button from "../ui/Button";
import "./hero.scss";

function Hero() {
    return (
        <section className="hero">
            <span className="badge">Bienvenidos peregrinos</span>
            <h1>En vías de <span>Santidad</span></h1>
            <p>{SITE_INFO.description}</p>
            <div className="buttons">
                <Link to={PATHS.SAINTS}><Button variant="primary">Explorar Santos</Button></Link>
                <Link to={PATHS.MIRACLES}><Button variant="secondary">Ver Milagros</Button></Link>
            </div>
        </section>
    );
}

export default Hero;