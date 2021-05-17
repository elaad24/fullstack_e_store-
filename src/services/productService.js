import http from "./http";
import { apiUrl } from "../config.json";

export function createproduct(product) {
  return http.post(`${apiUrl}/products/addproduct`, product);
}

export default {
  createproduct,
};
