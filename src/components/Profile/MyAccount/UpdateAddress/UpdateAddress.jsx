// import { Form, Input, Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/UserContext/UserState";

const UpdateAddress = () => {
  const { getUserInfo, user, update } = useContext(UserContext);

  const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, phone } = formData;

  useEffect(() => {
    getUserInfo();
  }, []);

  //   const onFinish = (values) => {
  //     updateUser(values)
  //   };
  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <> <h2>Shipping address</h2>
    <p className="userMessage">
    Hey there! If you want to update your delivery address, you can do it here.
    </p>

    <form className="userDetails" onSubmit={onSubmit}>
        <div className="userLabel">Address line 1</div>
        <input
          className="userData"
          type="text"
          name="address"
          placeholder="fake address"
          value={name}
          onChange={onChange}
        />
        <div className="userLabel">Address line 2</div>
        <input
          className="userData"
          type="text"
          name="address2"
          placeholder="fake address"
          value={name}
          onChange={onChange}
        />
        <input className="updateBtn" type="submit" value ="Save Changes"/>
      
    </form>
    </>
  );
};

export default UpdateAddress;
