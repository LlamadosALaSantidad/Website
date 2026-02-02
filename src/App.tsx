import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import "./styles/global.scss"
import { HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    )
}

export default App
