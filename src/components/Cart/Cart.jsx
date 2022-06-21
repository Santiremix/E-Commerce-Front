import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart,clearCart } = useContext(ProductsContext);
  
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.title}</span>
        <span>{cartItem.price}</span>
      </div>
    );
  });
  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
    </div>
  );
};

export default Cart;