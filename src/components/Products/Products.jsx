import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss"

const Products = () => {
  const { getProducts, products, addCart, cart, getProductByName, getProductByCategory } = useContext(ProductsContext);
  const [busqueda, setBusqueda] = useState('');

  const handleChange = e => {
    setBusqueda(e.target.value)
    console.log('Busequeda: ' + e.target.value)
  }

  const buscar = (name) => {
    getProductByName(name)
  }

  const filtro = (num) => {
    getProductByCategory(num)
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
          <button onClick={() => addCart(product)}>Add to Cart</button>
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
        <button className="reset-btn" onClick={() => getProducts()}>Show All</button>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filtrar por Categoría
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p class="dropdown-item" onClick={() => filtro(1)}>Camisetas</p>
            <p class="dropdown-item" onClick={() => filtro(2)}>Pantalones</p>
            <p class="dropdown-item" onClick={() => filtro(3)}>Sudaderas</p>
            <p class="dropdown-item" onClick={() => filtro(4)}>Accesorios</p>
          </div>
        </div>
      </div>
      <div className="order">
        {product}
      </div>
  </div>
  )
};

export default Products;