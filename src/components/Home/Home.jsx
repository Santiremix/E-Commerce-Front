import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import promo from "../../assets/images/promo.png"
import newsletter from "../../assets/images/newsletter.png"
import gif from "../../assets/images/gif.gif"
import banner from "../../assets/images/banner.gif"

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
        <div className="home__banner"><img src={banner}/></div>
        <div className="home__duo">
          <div className="home__gif"><img src={gif} onClick={() => linkToSection()}/></div>
          <div className="home__promo"> <img src={promo} onClick={() => linkToSection()}/> </div>
        </div>
        <div className="home__newsletter"> <img src={newsletter}/></div>
        <div className="home__men" onClick={() => linkToSection(5)}> <div className="textStyle">men</div> </div>
        <div className="home__women" onClick={() => linkToSection(6)}> <div className="textStyle">women</div> </div>
      </div>
    </>
  );
};

export default Home;
