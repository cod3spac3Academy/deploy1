//import './NavBar.css';

import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                    to="/">Home</NavLink></li>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                    to="/about">About</NavLink></li>
                <li><NavLink
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                    to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;