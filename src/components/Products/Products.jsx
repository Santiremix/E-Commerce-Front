import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss"
const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map((product) => {
    return (
      <div key={product.id}>

        <span className="productTitle"> {product.title} </span>
        <span>{product.price}</span>
      </div>
    );
  });

  return <div>
      {product}</div>;
};

export default Products;