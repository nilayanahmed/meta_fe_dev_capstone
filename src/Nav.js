import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="nav-bar" role="navigation">
            <ul>
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/menu" className="nav-item">Menu</NavLink>
                <NavLink to="/reserve" className="nav-item">Reserve Table</NavLink>
                {/* <NavLink to="/order" className="nav-item">Order Online</NavLink> */}
                <NavLink to="/about"className="nav-item">About Us</NavLink>
            </ul>
        </nav>
    );
}