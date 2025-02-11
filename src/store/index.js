import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import fetchStatusReducer from "./fetchStatusSlice";
import cartReducer from "./cartSlice";

const trendycartStore = configureStore({
  reducer: {
    products: productsReducer,
    fetchStatus: fetchStatusReducer,
    cart: cartReducer,
  },
  // Adding middleware to handle async actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default trendycartStore;