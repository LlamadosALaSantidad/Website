import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <>
            <Helmet>
                <title>Inicio | Llamados a la Santidad</title>
            </Helmet>
            <main className="home">
                <h1>Bienvenido!</h1>
            </main>
        </>
    );
}

export default Home;