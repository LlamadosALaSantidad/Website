import { Helmet } from "react-helmet-async";

function NotFound() {
    return (
        <>
            <Helmet>
                <title>Página no encontrada | Llamados a la Santidad</title>
            </Helmet>
            <main className="notFound">
                <h1>Not Found!</h1>
            </main>
        </>
    );
}

export default NotFound;