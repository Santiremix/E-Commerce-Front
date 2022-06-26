const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
      
      case "GET_PRODUCT_BY_NAME":
      return {
        ...state,
        products: action.payload,
      };

      case "GET_PRODUCT_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
      };
      
    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
      
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
      
  
    default:
      return state;
  }
};
export default products;