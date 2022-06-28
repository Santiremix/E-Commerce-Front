// import e from "cors";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.scss"
import { notification } from "antd";
import { ShoppingOutlined } from '@ant-design/icons';

const Products = () => {
  const { getProducts, products, addCart, cart, getProductByName, getProductByCategory, orderProductAsc, orderProductDes } = useContext(ProductsContext);
  const [busqueda, setBusqueda] = useState('');
 const addCartAndShowMessage = (product) => {
     addCart(product)
     openNotification('success','bottomRight')
 }
  const handleChange = e => {
    setBusqueda(e.target.value)
    console.log('Busequeda: ' + e.target.value)
  }

  const buscar = (name) => {
    getProductByName(name)
    document.getElementsByClassName("buscador")[0].value = "";
  }

  const showAll = () => {
    getProducts()
    document.getElementsByClassName("buscador")[0].value = "";
  }

  const filtro = (num) => {
    getProductByCategory(num)
  }

  const orderAsc = () => {
    orderProductAsc()
  }

  const orderDesc = () => {
    orderProductDes()
  }

  useEffect(() => {
    getProducts();
    window.scrollTo({
        top: 0,
        // behavior: 'smooth',
    });
  }, []);

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
   }
  
  , [cart]);

  const openNotification = (type,placement) => {
    notification[type]({
      message: 'Item added to your shopping bag',
      description:
        '',

      icon: (
        <ShoppingOutlined
          style={{
            color: '#000',
          }}
        />
      ),
      placement,
    });
  };

  const product = products.map((product) => {
    return (
      <>
        <div className="card" key={product.id} >
          <img src={product.image} alt=""/> 
          <span className="productTitle "> {product.name} </span>
          <span className="precio">{product.price.toFixed(2)}€</span>
          <button onClick={() => addCartAndShowMessage(product)}>Add to Cart</button>
        </div>
      </>
    );
  });

  return(
  <div className="cont">
    <div className="search-div">
        <input className="buscador" type='search' placeholder='Buscar' onChange={handleChange}>
        </input>
        <button id ="Button" className="search-btn " onClick={() => buscar(busqueda)}>Search</button>
        <button id ="Button" className="reset-btn" onClick={() => showAll()}>Show All</button>

        <div className="drop-btns">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Clothing
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item" onClick={() => filtro(1)}>T-Shirts</p>
              <p class="dropdown-item" onClick={() => filtro(2)}>Trousers</p>
              <p class="dropdown-item" onClick={() => filtro(3)}>Hoodies</p>
              <p class="dropdown-item" onClick={() => filtro(4)}>Accesories</p>
            </div>
          </div>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by Price
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item" onClick={() => orderAsc()}>Lowest to Hightest</p>
              <p class="dropdown-item" onClick={() => orderDesc()}>Highest to Lowest</p>
            </div>
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