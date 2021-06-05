import http from "./http";
import { apiUrl } from "../config.json";
import { updateReduxShoppingCart } from "../redux/reduxFunctions";

export async function addToCart({ quantity, user_id, productid }) {
  //information need to be  amount, user_id, product
  const newProduct = await http.post(`${apiUrl}/shoppingcart/addproduct`, {
    quantity,
    user_id,
    productid,
  });

  //update redux shopping cart
  await updateReduxShoppingCart(user_id);

  return newProduct;
}

export async function getShoppingCart(user_id) {
  const shoppingCart = await http.get(
    `${apiUrl}/shoppingcart?user_id=${user_id}`
  );

  return shoppingCart;
}

export async function removeProdFromShoppinCart(user_id, productid) {
  const newShoppingCart = await http.put(
    `${apiUrl}/shoppingcart/removeItem?user_id=${user_id}&productid=${productid}`
  );

  //update redux shopping cart
  await updateReduxShoppingCart(user_id);

  return newShoppingCart;
}

export default {
  addToCart,
  getShoppingCart,
  removeProdFromShoppinCart,
};
