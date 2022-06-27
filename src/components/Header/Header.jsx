import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { ShoppingOutlined,UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.gif"
const Header = () => {
  const { token, logout } = useContext(UserContext);

  const navigate = useNavigate();

  // const logoutUser = () => {
  //   logout();
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 1000);
  // };
  //Hola

  return (
    <>
      <nav className="header">
      <Link to="/"><div>{<img src={logo} style={{height:70+'px'}}/>}</div></Link>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/men">men</Link>
          </li>
          <li>
            <Link to="/women">women</Link>
          </li>

          <li>
            <span>
              <Link to="/cart">
                <ShoppingOutlined />
              </Link>
            </span>
          </li>
         
            {token ? (
              <>
              <li>
              <Link to="/profile"><UserOutlined /></Link>
            </li>
               {/* <li><span onClick={logoutUser}>
                <Link to="/">Logout</Link>
              </span>
              </li> */}
              </>
            ) : (
              <>
                {/* <li><span>
                  <Link to="/login">Login</Link>
                </span></li>
               <li> <Link to="/register">Register</Link></li> */}
                <li><span>
                  <Link to="/access"><UserOutlined /></Link>
                </span></li>
              </>
            )}
          
        </ul>
      </nav>
    </>
  );
};

export default Header;
