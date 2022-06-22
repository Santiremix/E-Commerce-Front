import "./Access.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Access() {
  return (
    <div className ="example">
      <Login />
      <Register />
    </div>
  );
}

export default Access;
