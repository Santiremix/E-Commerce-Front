import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  cart: cart ? cart : [],
};

const API_URL = "http://localhost:8080";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState);
  
    const getProducts = async () => {
      const res = await axios.get(API_URL + "/products/getProducts");
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      return res;
    };

    const getProductByName = async (entrada) => {
      const res = await axios.get(API_URL + `/products/search/name/${entrada}`);
      dispatch({
        type: "GET_PRODUCT_BY_NAME",
        payload: res.data,
      });
      return res;
    };

    const getProductByCategory = async (param) => {
      const res = await axios.get(API_URL + `/categories/getCategoryById/${param}`);
      dispatch({
        type: "GET_PRODUCT_BY_CATEGORY",
        payload: res.data,
      });
      return res;
    };

    const orderProductDes = async () => {
      const res = await axios.get(API_URL + '/products/getProductsOrdered');
      dispatch({
        type: "ORDER_PRODUCTS_DES",
        payload: res.data,
      });
      return res;
    };

    const orderProductAsc = async () => {
      const res = await axios.get(API_URL + '/products/getProductsOrderedASC');
      dispatch({
        type: "ORDER_PRODUCTS_ASC",
        payload: res.data,
      });
      return res;
    };

    const addCart = (product) => {
      dispatch({
        type: "ADD_CART",
        payload: product,
      });
    };

    const removeCart = (product) => {
      dispatch({
        type: "REMOVE_CART",
        payload: product,
      });
    };

    const clearCart = () => {
      dispatch({
        type: "CLEAR_CART",
      });
    };
  
    return (
      <ProductsContext.Provider
        value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
        removeCart,
        getProductByName,
        getProductByCategory,
        orderProductAsc,
        orderProductDes
        }}
      >
        {children}
      </ProductsContext.Provider>
    );
  };
  
  