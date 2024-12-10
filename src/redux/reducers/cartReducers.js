import { ADD_TO_CART, DELETE_CART } from "../Actions";

const initialState = {
  content: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case DELETE_CART:
      return {
        ...state,

        content: state.content.filter((_, i) => {
          if (i === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
