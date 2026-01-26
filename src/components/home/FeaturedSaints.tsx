import saintsJson from "../../content/saints.json";
import Card from "../cards/Card";

function FeaturedSaints() {
    const saints = saintsJson.saints;
    const featuredSaints = saints.slice(0, 3);

    return(
        <section className="featured_saints">
            <div className="featured_header">
                <div className="featured_title">
                    <h3>Modelos de Fe</h3>
                    <h2>Santos Destacados</h2>
                </div>
                <p>
                    <span>Ver todos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" stroke-width="1"/></svg>
                </p>
            </div>
            <article className="featured_saints_grid">
                {
                    featuredSaints.map((saint, index) => <Card saint={saint} key={index}/>)
                }
            </article>
        </section>
    );
}

export default FeaturedSaints;