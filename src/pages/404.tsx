import { Helmet } from "react-helmet-async";
import { PATHS } from "../constants/routes";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function NotFound() {
    return (
        <>
            <Helmet>
                <title>Página no encontrada | Llamados a la Santidad</title>
            </Helmet>
            <main className="notFound" style={{marginBottom: "4rem", marginTop: "4rem"}}>
                <h2>404</h2>
                <h1>Esta página no existe</h1>
                <p>No pudimos encontrar lo que estabas buscando.</p>
                <Link to={PATHS.HOME}><Button variant="primary">Volver al Inicio</Button></Link>
            </main>
        </>
    );
}

export default NotFound;