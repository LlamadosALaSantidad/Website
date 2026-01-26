import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PATHS } from "./../constants/routes";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/404";
import SaintDetail from "../pages/SaintDetail";
import EucharisticMiracleDetail from "../pages/EucharisticMiracleDetail";

const Home = lazy(() => import("../pages/Home"));
const Saints = lazy(() => import("../pages/Saints"));
const Miracles = lazy(() => import("../pages/EucharisticMiracles"));
const Contact = lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Layout />,
        errorElement: <div>¡Ups! Algo salió mal.</div>,
        children: [
            { index: true, element: <Suspense fallback="..."><Home /></Suspense> },
            { path: PATHS.SAINTS, element: <Suspense fallback="..."><Saints /></Suspense> },
            { path: `${PATHS.SAINTS}/:slug`, element: <Suspense fallback="..."><SaintDetail /></Suspense> },
            { path: PATHS.MIRACLES, element: <Suspense fallback="..."><Miracles /></Suspense> },
            { path: `${PATHS.MIRACLES}/:slug`, element: <Suspense fallback="..."><EucharisticMiracleDetail /></Suspense> },
            { path: PATHS.CONTACT, element: <Suspense fallback="..."><Contact /></Suspense> },
            { path: "*", element: <NotFound /> }
        ],
    },
]);