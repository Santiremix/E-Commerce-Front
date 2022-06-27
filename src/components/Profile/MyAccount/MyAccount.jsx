import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";
import { Divider } from "antd";
import {
  SmileOutlined,
  HomeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import UpdateAddress from "./UpdateAddress/UpdateAddress";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

import "./MyAccount.scss";
const MyProfile = () => {
  const navigate = useNavigate();
  const initialValue = false;
  const [personalInfo, setPersonalInfo] = useState(initialValue);
  const { getUserInfo, user, logout } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    getUserInfo();
  }, []);
  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="userAccount">
      
      <ul className="userMenu">
      <h3 className="textStyle">Account</h3>
      <Divider />
        <li>
          <p onClick={() => setPersonalInfo(false)}>Personal Information </p>
          <span>
            <ArrowRightOutlined />
          </span>
        </li>
        <Divider />
        <li>
          <p onClick={() => setPersonalInfo(true)}>Shipping Details </p>
          <span>
            <ArrowRightOutlined />
          </span>
        </li>
        <Divider />
        <span onClick={logoutUser}>
          <Link to="/">Log Out</Link>
        </span>
      </ul>
      <div className="userInfo">
        {/* <div className="userDetails">
    <div className="userLabel">Full Name</div>
    <p className="userData">{user.name}</p>
    <div className="userLabel">Email Address</div>
    <p className="userData">{user.email}</p>
    <div className="userLabel">Phone</div>
    <p className="userData">{user.phone}</p>
    </div> */}
        {personalInfo ? <UpdateAddress /> : <UpdateProfile />}
      </div>
    </div>
  );
};

export default MyProfile;
