import { UPDATE_USER } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};
