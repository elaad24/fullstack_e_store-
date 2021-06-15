import { LOGIN, LOGOUT } from "./actionTypes";

// action that save the user info

export const loginUser = (userInfo) => ({
  type: LOGIN,
  payload: { userInfo },
});

export const logOut = () => ({
  type: LOGOUT,
  payload: "",
});
