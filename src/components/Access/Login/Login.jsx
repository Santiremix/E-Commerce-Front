import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  // const onFinish = (values) => {
  //   login(values)
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
        <input className="updateBtn" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
