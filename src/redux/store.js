import { configureStore } from "@reduxjs/toolkit";

import userStatusReducer from "./reducers/userSystem";

const reducer = {
  userSystem: userStatusReducer,
};

const store = configureStore({ reducer });

export default store;
