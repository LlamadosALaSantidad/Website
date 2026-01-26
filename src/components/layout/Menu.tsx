import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/routes";

function Menu() {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to={PATHS.HOME}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/${PATHS.SAINTS}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Santos
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/${PATHS.MIRACLES}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Milagros Eucarísticos
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/${PATHS.CONTACT}`}
                    className={({ isActive }) => isActive ? "active-link" : ""}
                >
                    Contacto
                </NavLink>
            </li>
        </ul>
    );
}

export default Menu;