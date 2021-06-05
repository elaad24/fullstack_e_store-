import { getShoppingCart } from "../services/shoppingCartAndWishListService";
import { importShoppingCart } from "./actions/userShoppingCart";
import store from "./store";

export async function updateReduxShoppingCart(user_id) {
  // get user's shoppingCart
  const shoppingCart = await getShoppingCart(user_id);

  // add to redux store user's shoppingCart
  await store.dispatch(importShoppingCart(shoppingCart.data.products));
}
