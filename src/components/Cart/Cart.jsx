import { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { useNavigate, Link } from "react-router-dom";
import "./Cart.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { notification } from "antd";

// function summary(order) {
//     let total = order.price
//     total = total + order.price
//     console.log(total)
//     return total
// }

const Cart = () => {
  const { cart, clearCart, removeCart } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const { createOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const initialValue = false;
  const [orders, setOrders] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const openNotificationWithIcon = (type, placement) => {
    notification[type]({
      message: "Order created!",
      description:
        "Your order has been placed! Check your order history for more details such us delivery date.",
      placement,
    });
  };

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
    if (!user) {
      navigate("/access");
    }
    openNotificationWithIcon("success", "topRight");

    setTimeout(() => {
      navigate("/products");
      createOrder(cart);
      clearCart();
      // podria tambien ser home
    }, 3000);
  };

  const cartItem = cart.map((cartItem, i) => {
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
            {/* <span className="category">{cartItem.Categories[0].name}</span> */}
          </div>
          <div className="cartPrice">{cartItem.price}€</div>
        </div>
      </div>
    );
  });
  return (
    <div className="cartCheckout">
      <div className="cartList">
        <h3 className="textStyle">Shopping Bag ({cart.length})</h3>
        {cartItem}
      </div>
      <div className="cartTotal">
        <h3 className="textStyle">Summary</h3>
        <div className="cartDetails">
          <div className="subtotal">Subtotal</div>{" "}
          <div className="subtotal">€€€</div>
        </div>
        <div className="cartDetails">
          <div className="delivery">Delivery</div>{" "}
          <div className="delivery">Free</div>
        </div>

        <button
          className="checkout buttonStyle"
          onClick={() => createNewOrder()}
        >
          Checkout
        </button>
        <div className="taxes">Taxes included</div>
       
    
      </div>
    </div>
  );
};

export default Cart;
