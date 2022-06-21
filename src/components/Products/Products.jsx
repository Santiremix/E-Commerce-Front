import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss"
const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const product = products.map((product) => {
    return (
        <div className="card" key={product.id}>
          <img></img>
          <span className="productTitle"> {product.title} </span>
          <span className="precio">{product.price}</span>
          <button onClick={() => addCart(product)}>Add Cart</button>
        </div>
    );
  });

  return <div className="cont">
      {product}
      </div>;
};

export default Products;