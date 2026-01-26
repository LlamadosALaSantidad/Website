import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./router/index";
import "./styles/global.scss"

function App() {
    return (
        <>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </>
    )
}

export default App
