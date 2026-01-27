import { SITE_INFO } from "../../constants/site-info";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";
import Button from "../ui/Button";

function Hero() {
    return (
        <section className="hero">
            <span className="badge">Bienvenidos peregrinos</span>
            <h1>Descubre la belleza de la <span>Santidad</span></h1>
            <p>{SITE_INFO.description}</p>
            <div className="buttons">
                <Button variant="primary"><Link to={PATHS.SAINTS}>Explorar Santos</Link></Button>
                <Button variant="secondary"><Link to={PATHS.MIRACLES}>Ver Milagros</Link></Button>
            </div>
        </section>
    );
}

export default Hero;