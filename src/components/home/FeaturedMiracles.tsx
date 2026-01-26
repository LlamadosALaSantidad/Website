import miraclesJson from "../../content/miracles.json";
import Card from "../cards/Card";

function FeaturedMiracles() {
    const miracles = miraclesJson.miracles;
    const featuredMiracles = miracles.slice(0, 3);

    return(
        <section className="featured_miracles">
            <div className="featured_header">
                <div className="featured_title">
                    <h3>Signos de Amor</h3>
                    <h2>Milagros Eucarísticos</h2>
                </div>
                <p>
                    <span>Ver todos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13" stroke-width="1"/></svg>
                </p>
            </div>
            <article className="featured_miracles_grid">
                {
                    featuredMiracles.map((miracle, index) => <Card miracle={miracle} key={index}/>)
                }
            </article>
        </section>
    );
}

export default FeaturedMiracles;