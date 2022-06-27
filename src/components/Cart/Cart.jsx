import { useContext, useEffect } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { DeleteTwoTone } from "@ant-design/icons";

// function summary(order) {
//     let total = order.price
//     total = total + order.price
//     console.log(total)
//     return total
// }

const Cart = () => {
  const { cart, clearCart, removeCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cart.length <= 0) {
    return (
      <>
        <div className="noCart">
          <p>Your current span shopping bag is empty...</p>
          <button className="goProducts buttonStyle">
            <Link to="/products">Check out our products</Link>
          </button>
        </div>
      </>
    );
  }
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    //   pendiente funcion suma
    // const total = summary(cartItem);
    console.log(cartItem.Categories[0].name);

    return (
      <div className="cartProduct" key={i}>
        <div className="cartImage">
          <div>
            <img src={cartItem.image} className="cartImg" />
          </div>
          <div>
            <button className="cartRemove" onClick={() => removeCart(cartItem)}>
              Delete item{" "}
            </button>
          </div>
        </div>
        <div className="cartDescription">
          <div className="cartInfo">
            <span className="name">{cartItem.name}</span>
            <span className="category">{cartItem.Categories[0].name}</span>
          </div>
          <div className="cartPrice">{cartItem.price}€</div>
        </div>
      </div>
    );
  });
  return (
    <div className="cartCheckout">
      <div className="cartList">
        <h2 className="textStyle">Shopping Bag ({cart.length})</h2>
        {cartItem}

      </div>
      <div className="cartTotal">
        <h2 className="textStyle">Summary</h2>

        <button className="checkout buttonStyle" onClick={() => createNewOrder()}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
