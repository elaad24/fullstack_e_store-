import { DELETESHOPPINGCART, IMPORTSHOPPINGCART } from "../actions/actionTypes";

const initialState = {
  shoppingCart: "",
};

// retun in obj form to store the info form the user shopping cart
function userShoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case IMPORTSHOPPINGCART:
      return {
        ...state,
        shoppingCart: action.payload,
      };

    case DELETESHOPPINGCART:
      return { state: " " };

    default:
      return state;
  }
}

export default userShoppingCartReducer;
