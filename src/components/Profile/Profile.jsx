import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";
import { Form, Input, Button } from "antd";
import "./Profile.scss";
function date(order) {
  const date = order.updatedAt.split("T")[0].split("-");
  date[2] = Number(date[2]) + 3;
  return date.join("-");
}

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return (
      <div className="example">
        {" "}
        <Spin />
      </div>
    );
  }
  console.log(user.Orders);
  const order = user.Orders.map((order, i) => {
    const deliveryDate = date(order);

    return (
      <div className="order" key={i}>
        <div className="orderTitle">Order #{order.id}</div>
        <div className="dates">
        <div className="orderDate">
          <span className="date">Order Date: </span><br/>{order.updatedAt.split("T")[0]}
        </div>
        <div className="deliveryDate"><span className="date">Delivery Date:</span><br/> {deliveryDate}</div></div>
        {order.Products.map((article, i) => (
          <div className="article" key={i}>
            <div><img src={article.image} className="articleImg"/></div>
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
      <div className="profile">
        <div className="navProfile">
          <span>link1</span> <span>link2</span>
        </div>
        <div className="userInfo">
          <h2>Hello {user.name}!</h2>
          <p>Here you can find your contact details:</p>
          <div className="userContact">
          <div className="userData">Name</div>
          <p className="userMap">{user.name}</p>
          <div className="userData">Email</div>
          <p className="userMap">{user.email}</p>
          <div className="userData">Mobile Phone</div>
          <p className="userMap">{user.phone}</p>
          </div>
        </div>

        <div className="ordersInfo">
          <h3>Historial de Pedidos</h3>
          <p>Aquí encontrarás toda la información de tus pedidos:</p>
          {order}
        </div>
      </div>
    </>
  );
};

export default Profile;
