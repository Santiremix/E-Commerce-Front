import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
function Register() {
  const initialValue = true;
  const [setAccount] = useState(initialValue);
    const {register} = useContext(UserContext);

    const navigate = useNavigate()
    const initialState = {
      name:"",
      email: "",
      password: "",
      password2:"",
      phone:""

    };
    const [formData, setFormData] = useState(initialState);
    const { name,email, password,password2,phone} = formData;

    const openNotificationWithIcon = (type, placement) => {
      notification[type]({
        message: "Welcome",
        description:
          "Your account has been created.",
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
      console.log(formData)
      register(formData);
      openNotificationWithIcon("success", "topRight");
      setTimeout(() => {
        navigate("/products")
        
    },3000)
    };

    return (
      <div className="container__Login">
      <form className="userDetails" onSubmit={onSubmit}>
      <div className="userLabel">Full Name <span className=" textStyle">*</span></div>
        <input
          className="userData"
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          autoFocus
          value={name}
          onChange={onChange}
        />
        <div className="userLabel">Email <span className=" textStyle">*</span></div>
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
        <div className="userLabel">Password <span className=" textStyle">*</span></div>
        <input
          className="userData"
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <div className="userLabel">Confirm your Password <span className=" textStyle">*</span></div>
        <input
          className="userData"
          type="password"
          name="password2"
          required
          placeholder="Confirm your password"
          value={password2}
          onChange={onChange}
        />
        <div className="userLabel">Phone <span className=" textStyle">*</span></div>
        <input
          className="userData"
          type="text"
          name="phone"
          required
          placeholder="Enter your phone number"
          value={phone}
          onChange={onChange}
        />
        <input className="updateBtn buttonStyle" type="submit" value="Register" />
      </form>
    </div>
      );
}

export default Register