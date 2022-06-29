import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.scss";
import MyOrders from "./MyOrders/MyOrders";
import MyProfile from "./MyAccount/MyAccount";

const Profile = () => {
  const { getUserInfo, user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const initialValue = true;
  const [orders, setOrders] = useState(initialValue);
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

  return (
    <>
      <div className="profile">
        <div className="navProfile">
          <span
            className="profile__tab"
            onClick={() => setOrders(true)}
            style={orders ? { opacity: 1 } : { opacity: 0.3 }}
          >
            Account
          </span>
          <span
            className="profile__tab"
            onClick={() => setOrders(false)}
            style={orders ? { opacity: 0.3 } : { opacity: 1 }}
          >
            Order History
          </span>
        </div>
        {orders ? <MyProfile /> : <MyOrders />}
      </div>
    </>
  );
};

export default Profile;
