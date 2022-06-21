import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const { token, logout } = useContext(UserContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  //Hola

  return (
    <>
      <nav className="header">
        <p>Nombre</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <span>
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </span>
          </li>
         
            {token ? (
              <>
              <li>
              <Link to="/profile">Profile</Link>
            </li>
               <li><span onClick={logoutUser}>
                <Link to="/">Logout</Link>
              </span>
              </li>
              </>
            ) : (
              <>
                <li><span>
                  <Link to="/login">Login</Link>
                </span></li>
               <li> <Link to="/register">Register</Link></li>
              </>
            )}
          
        </ul>
      </nav>
    </>
  );
};

export default Header;
