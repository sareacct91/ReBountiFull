import { UPDATE_USER, UPDATE_CART_ITEM } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };

    case UPDATE_CART_ITEM:
        return {
          ...state,
          cart: [...action.cart],
        };
    default:
      return state;
  }
};


