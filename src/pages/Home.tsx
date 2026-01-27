import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import FeaturedSaints from "../components/home/FeaturedSaints";
import FeaturedMiracles from "../components/home/FeaturedMiracles";
import Newsletter from "../components/home/Newsletter";

function Home() {
    return (
        <>
            <Helmet>
                <title>Inicio | Llamados a la Santidad</title>
                <meta name="description" content="Descubre historias inspiradoras de santos católicos y milagros eucarísticos." />
            </Helmet>
            <main className="home">
                <Hero />
                <About />
                <FeaturedSaints />
                <FeaturedMiracles />
                <Newsletter />
            </main>
        </>
    );
}

export default Home;