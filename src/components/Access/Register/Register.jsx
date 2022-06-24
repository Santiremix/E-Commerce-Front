import './Register.scss'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";


function Register() {

    const { clearMessage, register, message } = useContext(UserContext);

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
  
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const onSubmit = (e) => {
      e.preventDefault();
      register(formData);
      setTimeout(() => {
        navigate("/")
        clearMessage()
    },3000)
    };

    return (
      <div className="container__Login">
      <form className="userDetails" onSubmit={onSubmit}>
      <div className="userLabel">Full Name *</div>
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
        <div className="userLabel">Email *</div>
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
        <div className="userLabel">Password *</div>
        <input
          className="userData"
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={onChange}
        />
        <div className="userLabel">Confirm your Password *</div>
        <input
          className="userData"
          type="password"
          name="password2"
          required
          placeholder="Confirm your password"
          value={password2}
          onChange={onChange}
        />
        <div className="userLabel">Phone *</div>
        <input
          className="userData"
          type="text"
          name="phone"
          required
          placeholder="Enter your phone number"
          value={phone}
          onChange={onChange}
        />
        <input className="updateBtn" type="submit" value="Register" />
      </form>
    </div>
      );
}

export default Register