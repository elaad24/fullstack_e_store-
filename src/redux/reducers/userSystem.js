import { LOGIN, LOGOUT } from "../actions/actionTypes";

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

    case LOGOUT:
      return { state: " " };

    default:
      return state;
  }
}

export default userStatusReducer;
