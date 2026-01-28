import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";
import Button from "../ui/Button";
import "./about.scss";

function About() {
    return (
        <section className="about">
            <article className="about_image">
                <img src="/images/saints/santa-teresa-de-avila/cover.webp" alt="Sobre Nosotros" />
                <div className="quote">
                    <blockquote>
                        "Quien a Dios tiene, nada le falta: solo Dios basta"
                    </blockquote>
                    <span className="author">
                        Santa Teresa de Ávila
                    </span>
                </div>
            </article>
            <article className="about_text">
                <h2>Sobre Nosotros</h2>
                <p><span>Llamados a la Santidad</span> es un espacio dedicado a difundir la vida de los santos y los milagros eucarísticos, con el propósito de inspirar a cada persona a vivir su fe con esperanza, amor y compromiso.</p>
                <p>Creemos que la santidad no es un privilegio para unos pocos, sino un llamado universal. A través de estas historias, queremos mostrarte que Dios sigue actuando en el mundo hoy.</p>
                <Button variant="terciary"><Link to={PATHS.CONTACT}>Únete a nuestra comunidad</Link></Button>
            </article>
        </section>
    );
}

export default About;