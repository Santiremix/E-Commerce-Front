import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const orderId = order.map((element) => {
      return element.id;
    });
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      await axios.post(
        API_URL + "/orders/createOrder",
        { ProductId: orderId },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
