import { Link } from "react-router-dom";
import { PATHS } from "../../constants/routes";

function About() {
    return (
        <section className="about">
            <article className="about_image">
                <img src="" alt="Sobre Nosotros" />
                <div className="quote">
                    <blockquote>
                        "Pasaré mi cielo haciendo el bien en la tierra"
                    </blockquote>
                    <span className="author">
                        Santa Teresita del Niño Jesús
                    </span>
                </div>
            </article>
            <article className="about_text">
                <h2>Sobre Nosotros</h2>
                <p>Llamados a la Santidad es un espacio dedicado a difundir la vida de los santos y los milagros eucarísticos, con el propósito de inspirar a cada persona a vivir su fe con esperanza, amor y compromiso.</p>
                <p>Creemos que la santidad no es un privilegio para unos pocos, sino un llamado universal. A través de estas historias, queremos mostrarte que Dios sigue actuando en el mundo hoy.</p>
                <button><Link to={PATHS.CONTACT}>Únete a nuestra comunidad</Link></button>
            </article>
        </section>
    );
}

export default About;