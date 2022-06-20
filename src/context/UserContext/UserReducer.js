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
      default:
        return state;
    }
  };
  export default users;