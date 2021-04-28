import { LOGIN } from "../actions/actionTypes";

const initialState = {
  user: "",
};

// retun in obj form to store the info form the user that logedin
function userStatusReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default userStatusReducer;
