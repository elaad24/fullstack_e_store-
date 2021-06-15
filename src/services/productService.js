import http from "./http";
import { apiUrl } from "../config.json";

export async function createproduct(product) {
  return await http.post(`${apiUrl}/products/addproduct`, product);
}

export async function getAllProducts() {
  return await http.get(`${apiUrl}/products`);
}

export async function getProduct(id) {
  return await http.get(`${apiUrl}/products/item?id=${id}`);
}
export default {
  createproduct,
  getAllProducts,
  getProduct,
};
