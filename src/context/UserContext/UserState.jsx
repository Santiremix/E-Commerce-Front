import { createContext } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";


const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);