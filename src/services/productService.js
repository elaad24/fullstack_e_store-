import http from "./http";
import { apiUrl } from "../config.json";

export function createproduct(product) {
  return http.post(`${apiUrl}/products/addproduct`, product);
}

export function getAllProducts() {
  return http.get(`${apiUrl}/products`);
}

export function getProduct(id) {
  return http.get(`${apiUrl}/products/item?id=${id}`);
}
export default {
  createproduct,
  getAllProducts,
  getProduct,
};
