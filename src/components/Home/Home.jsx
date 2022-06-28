import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import newsletter  from "../../assets/images/newsletter.png"

const Home = () => {

const navigate = useNavigate();
const { getProductByCategory, getProducts } = useContext(ProductsContext);
  const linkToSection = (param) => {
    navigate('/products')
    getProductByCategory(param)
  }
  return (
    <>
      <div className="home">
        <div className="home__banner"> </div>
        <div className="home__gif"> <div onClick={() => linkToSection()}></div></div>{" "}
        <div className="home__promo"> <div onClick={() => linkToSection()}></div> </div>
        <div className="home__newsletter"> </div>
        <div className="home__men" onClick={() => linkToSection(5)}> <div className="textStyle">men</div> </div>
        <div className="home__women" onClick={() => linkToSection(6)}> <div className="textStyle">women</div> </div>
      </div>
    </>
  );
};

export default Home;
