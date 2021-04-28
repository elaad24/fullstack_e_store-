import http from "./http";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (err) {
    return err;
  }
}

const service = {
  login,
  getCurrentUser,
};

export default service;
