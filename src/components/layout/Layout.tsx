import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatSocial from "./FloatSocial";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <FloatSocial />
        </>
    );
};

export default MainLayout;