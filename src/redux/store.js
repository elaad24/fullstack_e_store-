import { configureStore } from "@reduxjs/toolkit";

import userStatusReducer from "./reducers/userSystem";
import userShoppingCartReducer from "./reducers/userShoppingCart";

const reducer = {
  userSystem: userStatusReducer,
  userShoppingCart: userShoppingCartReducer,
};

const store = configureStore({ reducer });

export default store;
