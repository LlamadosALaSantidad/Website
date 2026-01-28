import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/routes";

interface MenuProps {
    closeNav: () => void;
}

function Menu({closeNav} : MenuProps) {
    return (
        <ul className="menu">
            <li onClick={closeNav}>
                <NavLink
                    to={PATHS.HOME}
                    end
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Inicio
                </NavLink>
            </li>
            <li onClick={closeNav}>
                <NavLink
                    to={`${PATHS.SAINTS}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Santos
                </NavLink>
            </li>
            <li onClick={closeNav}>
                <NavLink
                    to={`${PATHS.MIRACLES}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Milagros Eucarísticos
                </NavLink>
            </li>
            <li onClick={closeNav}>
                <NavLink
                    to={`${PATHS.CONTACT}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Contacto
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;