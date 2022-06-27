import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
  token: token ? token : null,
  user: null,
};
const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/users/UserOrder", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
    return res;
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    console.log(res.data);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };
  const register = async (user) => {
    const res = await axios.post(API_URL + "/users/createUser", user);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };

  const clearMessage = async () => {
    dispatch({
      type: "CLEARMESSAGE",
    });
  };

  const updateUser = async (param) => {
    const res = await axios.post(API_URL + `/users/updateUser/`,param, {
      headers: {
        authorization: token,
      },
    }
    );
    dispatch({
      type: "UPDATE_USER",
      payload: res.data,
    });
    return res;
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
        register,
        clearMessage,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
