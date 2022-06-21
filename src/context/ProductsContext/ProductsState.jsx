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
      const res = await axios.get(API_URL + "/books/getBooks");
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      return res;
<<<<<<< HEAD
    }
=======
    };
    const addCart = (product) => {
      dispatch({
        type: "ADD_CART",
        payload: product,
      });
    };
    const clearCart = () => {
      dispatch({
        type: "CLEAR_CART",
      });
    };
  
  
      
>>>>>>> 073b40996e84657cb827a151fd433df42e442c91
    return (
      <ProductsContext.Provider
        value={{
          products: state.products,
<<<<<<< HEAD
          getProducts
=======
        cart: state.cart,
        getProducts,
        addCart,
        clearCart

>>>>>>> 073b40996e84657cb827a151fd433df42e442c91
        }}
      >
        {children}
      </ProductsContext.Provider>
    );
<<<<<<< HEAD
}
=======
  };
  
>>>>>>> 073b40996e84657cb827a151fd433df42e442c91
  