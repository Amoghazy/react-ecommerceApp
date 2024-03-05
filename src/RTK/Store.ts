import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./Slices/tokenSlice";
import ProductsSlice from "./Slices/ProductsSlice";
import CartSlice from "./Slices/CartSlice";

const STORE = configureStore({
  reducer: {
    token: tokenSlice,
    products: ProductsSlice,
    cart: CartSlice,
  },
});

export default STORE;
