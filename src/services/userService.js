import http from "./http";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
import store from "../redux/store";
import { loginUser } from "../redux/actions/userSystem";
import { logOut } from "../redux/actions/userSystem";
import { toast } from "react-toastify";
import { updateReduxShoppingCart } from "../redux/reduxFunctions";

const tokenKey = "token";

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
  await toast.success(`welcome -  ${data.name}`);
  // add to store some user info at log in

  await store.dispatch(
    loginUser({ name: data.name, seller: data.seller, id: data.user_id })
  );

  //update redux shopping cart
  await updateReduxShoppingCart(data.user_id);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(tokenKey);
  store.dispatch(logOut());
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const service = {
  login,
  getCurrentUser,
  logout,
  getJwt,
};

export default service;
