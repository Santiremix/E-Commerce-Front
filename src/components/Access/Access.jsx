import "./Access.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

function Access() {
  const initialValue = true;
  const [account, setAccount] = useState(initialValue);

  return (
    <div className="example">
      <div className="accessTitle"> {account ? "Login" : "Register"}</div>
      {account ? <Login /> : <Register />}
      <div
        className="accessToggle"
        onClick={() => setAccount((initial) => !initial)}
      >
        {" "}
        {account ? "Create Account" : "Login"}
      </div>
    </div>
  );
}

export default Access;
