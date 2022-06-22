import { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss"
import { DeleteTwoTone } from "@ant-design/icons";
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
        <div><img src={cartItem.image} className="cartImg"/></div>
        <div className="cartDescription">
              <div className="cartTitle">{cartItem.name}</div>
              <div className="cartPrice">{cartItem.price}€</div>
            </div>

        
    
        <button className="cartRemove" onClick={() => removeCart(cartItem)}><DeleteTwoTone twoToneColor="#000000" /></button>

      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;