const users = (state, action) => {
    switch (action.type) {
      case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };

      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
      };

      case "GET_USER_INFO":
        return {
        ...state,
        user: action.payload,
      };

      case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null
      };
      case "REGISTER":
        return {
          ...state,
          message: action.payload.message,
        };
      case "CLEARMESSAGE":
            return {
              ...state,
              message: ""
            };
            
      case "UPDATE_USER":
            return {
              ...state,
              token: action.payload.token,
            };


      default:
        return state;
    }
  };
  export default users;