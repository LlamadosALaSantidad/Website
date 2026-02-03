import { Link } from "react-router-dom";
import Card from "../cards/Card";
import { PATHS } from "../../constants/routes";
import "./featuredMiracles.scss"
import { useEffect, useState } from "react";
import type Miracle from "../../types/miracle";

function FeaturedMiracles() {
    const [miracles, setMiracles] = useState<Miracle[]>([]);

    useEffect(() => {
        fetch("/content/miracles.json")
            .then(res => res.json())
            .then(data => setMiracles(data.miracles))
            .catch(console.error);
    }, []);

    const featuredMiracles = miracles.slice(0, 3);

    return(
        <section className="featured_miracles">
            <div className="featured_header">
                <div className="featured_title">
                    <h3>Signos de Amor</h3>
                    <h2>Milagros Eucarísticos</h2>
                </div>
                <Link to={PATHS.MIRACLES} className="featured_link">
                    <span>Ver todos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" strokeWidth="1"/></svg>
                </Link>
            </div>
            <article className="featured_miracles_grid">
                {
                    featuredMiracles.length > 0
                    ?
                    featuredMiracles.map((miracle, index) => <Card miracle={miracle} key={index} />)
                    :
                    <p>No hay contenido actualmente. Vuelve más tarde!</p>
                }
            </article>
        </section>
    );
}

export default FeaturedMiracles;