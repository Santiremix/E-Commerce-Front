import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss"

const Products = () => {
  const { getProducts, products, addCart, cart, getProductByName } = useContext(ProductsContext);
  const [busqueda, setBusqueda] = useState('');

  const handleChange = e => {
    setBusqueda(e.target.value)
    console.log('Busequeda: ' + e.target.value)
  }

  const buscar = (busqueda) => {
    getProductByName(busqueda)
  }

  useEffect(() => {
    getProducts();
  }, []);

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const product = products.map((product) => {
    return (
      <>
        <div className="card" key={product.id} >
          <img src={product.image} alt=""/> 
          <span className="productTitle"> {product.name} </span>
          <span className="precio">{product.price.toFixed(2)}€</span>
          <button onClick={() => addCart(product)}>Add Cart</button>
        </div>
      </>
    );
  });

  return(
  <div className="cont">
    <div className="search-div">
        <input className="buscador" type='search' placeholder='Buscar' onChange={handleChange}>
        </input>
        <button className="search-btn" onClick={() => buscar(busqueda)}>Buscar</button>
      </div>
      <div className="order">
        {product}
      </div>
  </div>
  )
};

export default Products;