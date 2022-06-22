import { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Cart.scss'

const Cart = () => {
  const { cart,clearCart,removeCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);
  
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.title}</span>
        <span>{cartItem.price}€</span>
        <button onClick={() => removeCart(cartItem)}>Delete</button>
      </div>
    );
  });
  return (
    <div className="cart-cont">
      {cartItem}
      <button className="order-btn" onClick={() => clearCart()}>Clear cart</button>
      <button className="order-btn" onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;