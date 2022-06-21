import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.map((product) => {
    return (
      <div key={product.id}>
        <span>{product.title} </span>
        <span>{product.price}</span>
      </div>
    );
  });

  return <div>{product}</div>;
};

export default Products;