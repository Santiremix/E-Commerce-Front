import './Header.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { token, logout } = useContext(UserContext);

const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/")
    }
    ,1000)
  };

  return (
    <>
        <nav className="header">
            <p>Nombre</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                {token ? (
            <span onClick={logoutUser}>
              <Link to="/">Logout</Link>
            </span>

        ) : (
          <span>
            <Link to="/login">Login</Link>
          </span>
        )}

                </li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            {/*Se puede añadir un icono en lugar de texto */}
            </ul>
        </nav>
    </>
  )
}

export default Header