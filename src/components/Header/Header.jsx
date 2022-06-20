import './Header.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
  return (
    <>
        <nav className="header">
            <p>Nombre</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            {/*Se puede añadir un icono en lugar de texto */}
            </ul>
        </nav>
    </>
  )
}

export default Header