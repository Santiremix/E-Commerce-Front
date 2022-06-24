import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";
import { Spin } from "antd";
import "./MyOrders.scss";

const MyOrders = () => {
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const { getUserInfo, user, logout } = useContext(UserContext);

  function delivery(order) {
    const date = order.updatedAt.split("T")[0].split("-");
    date[2] = Number(date[2]) + 3;
    return date.join("-");
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return (
      <div className="example">
        <Spin />
      </div>
    );
  }

  const order = user.Orders.map((order, i) => {
    const deliveryDate = delivery(order);

    return (
      <div className="order" key={i}>
        <div className="orderTitle">Order #{order.id}</div>
        <div className="dates">
          <div className="orderDate">
            <span className="date">Order Date: </span>
            <br />
            {order.updatedAt.split("T")[0]}
          </div>
          <div className="deliveryDate">
            <span className="date">Delivery Date:</span>
            <br /> {deliveryDate}
          </div>
        </div>
        {order.Products.map((article, i) => (
          <div className="article" key={i}>
            <div>
              <img src={article.image} className="articleImg" />
            </div>
            <div className="articleDescription">
              <div className="articleTitle">{article.name}</div>
              <div className="articlePrice">{article.price}€</div>
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <>
      <div className="ordersInfo">
        <h3>Order History</h3>
        <p>You can find all your orders here.</p>
        {order}
      </div>
    </>
  );
};

export default MyOrders;
