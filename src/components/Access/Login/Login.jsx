import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const openNotificationWithIcon = (type, placement) => {
    notification[type]({
      message: "Welcome back!",
      description:
        "Your login went smoothly.",
      placement,
    });
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
    openNotificationWithIcon("success", "topRight");
  };

  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
        navigate("/profile");
      }
    }, 500);
  }, [login]);

  return (
    <div className="container__Login">
      <form className="userDetails" onSubmit={onSubmit}>
        <div className="userLabel">Email</div>
        <input
          className="userData"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          autoFocus
          value={email}
          onChange={onChange}
        />
        <div className="userLabel">Password</div>
        <input
          className="userData"
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <input className="updateBtn buttonStyle" type="submit" value="Login" />
      </form>
      <span className="accessText">Forgot your password?</span>

    </div>
  );
}

export default Login;
