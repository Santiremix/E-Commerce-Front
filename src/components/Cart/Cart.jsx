import { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Link } from "react-router-dom";
import "./Cart.scss"
import { DeleteTwoTone } from "@ant-design/icons";

// function summary(order) {
//     let total = order.price 
//     total = total + order.price
//     console.log(total)
//     return total
// }

const Cart = () => {
  const { cart,clearCart,removeCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);
  
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
  if (cart.length <= 0) {
    return <>
    <div className="noCart">
        <p>Your current shopping bag is empty...</p>
        <button className="goProducts"><Link to="/products">Check out our products</Link>
    </button>
    </div>
   
  
    </>
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    //   pendiente funcion suma 
    // const total = summary(cartItem);
      
   
    return (
        
      <div className="cart" key={i}>
        <div className="cartImage">
            <div><img src={cartItem.image} className="cartImg"/></div>
        <div><button className="cartRemove" onClick={() => removeCart(cartItem)}>Delete item </button></div></div>
        <div className="cartDescription">
              <div className="cartTitle">{cartItem.name}</div>
              <div className="cartPrice">{cartItem.price}€</div>
            </div>

        
    
        {/* <button className="cartRemove" onClick={() => removeCart(cartItem)}><DeleteTwoTone twoToneColor="#000000" /></button> */}
        

      </div>
    );
    
  });
  return (
      <div className="cartCheckout">
    <div className="cartList">
    <h2>Shopping Bag ({cart.length})</h2>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      
    </div>
    <div className="cartTotal">
        <h2>Summary</h2>
      
       

        <button className="checkout"onClick={() => createNewOrder()}>Checkout</button>
    </div>
    </div>
  );
};

export default Cart;