import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/UserContext/UserState";

const UpdateProfile = () => {
  const { getUserInfo, user, updateUser } = useContext(UserContext);

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <>
      {" "}
      <h3 className="textStyle">Personal information</h3>
      <p className="userMessage">
        Hello {user.name}, the email address is used when you sign in to your
        account.
      </p>
      <form className="userDetails" onSubmit={onSubmit}>
        <div className="userLabel">Full Name</div>
        <input
          className="userData"
          type="text"
          name="name"
          placeholder={user.name}
          value={name}
          onChange={onChange}
        />
        <div className="userLabel">Email Address</div>
        <input
          className="userData"
          type="email"
          name="email"
          placeholder={user.email}
          value={email}
          onChange={onChange}
        />
        <div className="userLabel">Password</div>
        <input
          className="userData"
          type="password"
          name="password"
          placeholder="**********"
          value={password}
          onChange={onChange}
        />
        <div className="userLabel">Phone</div>
        <input
          className="userData"
          type="tel"
          name="phone"
          placeholder={user.phone}
          value={phone}
          onChange={onChange}
        />
        <input
          className="updateBtn buttonStyle"
          type="submit"
          value="Save Changes"
        />
      </form>
    </>
  );
};

export default UpdateProfile;
