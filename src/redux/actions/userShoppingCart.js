import { IMPORTSHOPPINGCART, DELETESHOPPINGCART } from "./actionTypes";

// action that save the user shopping cart info

export const importShoppingCart = (shoppingCart) => ({
  type: IMPORTSHOPPINGCART,
  payload: { shoppingCart },
});

export const deleteShoppingCart = () => ({
  type: DELETESHOPPINGCART,
  payload: "",
});
