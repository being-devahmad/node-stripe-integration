import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/CartSlice";
import productReducer from "../Redux/ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
