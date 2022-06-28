import "./Home.scss";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import newsletter  from "../../assets/images/newsletter.png"

const Home = () => {

const navigate = useNavigate();
const { getProductByCategory, getProducts } = useContext(ProductsContext);
  // const linkToSection = (param) => {
  //   navigate('/products')
  //   getProductByCategory(param)
  // }
  return (
    <>
      <div className="home">
        <div className="home__banner"> </div>
        <div className="home__gif"> <Link to = '/products'> <div></div></Link></div>{" "}
        <div className="home__promo"> <Link to = '/products'> <div></div></Link> </div>
        <div className="home__newsletter"> </div>
        <div className="home__men"> <Link to = '/products/men'><div className="textStyle">men</div></Link>  </div>
        <div className="home__women"> <Link to = '/products/women'><div className="textStyle">women</div></Link> </div>

       
      </div>
    </>
  );
};

export default Home;
