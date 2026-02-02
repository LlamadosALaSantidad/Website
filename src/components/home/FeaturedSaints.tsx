import { Link } from "react-router-dom";
import Card from "../cards/Card";
import { PATHS } from "../../constants/routes";
import "./featuredSaints.scss";
import type Saint from "../../types/saint";
import { useEffect, useState } from "react";

function FeaturedSaints() {
    const [saints, setSaints] = useState<Saint[]>([]);

    useEffect(() => {
        fetch("/content/saints.json")
            .then(res => res.json())
            .then(data => setSaints(data.saints));
    }, []);

    const featuredSaints = saints.slice(0, 3);

    return(
        <section className="featured_saints">
            <div className="featured_header">
                <div className="featured_title">
                    <h3>Modelos de Fe</h3>
                    <h2>Santos Destacados</h2>
                </div>
                <Link to={PATHS.SAINTS} className="featured_link">
                    <span>Ver todos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" strokeWidth="1"/></svg>
                </Link>
            </div>
            <article className="featured_saints_grid">
                {
                    featuredSaints.map((saint, index) => <Card saint={saint} key={index} />)
                }
            </article>
        </section>
    );
}

export default FeaturedSaints;