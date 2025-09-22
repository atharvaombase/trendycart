import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"; // Handles product-related state
import fetchStatusReducer from "./fetchStatusSlice"; // Manages fetch status state
import cartReducer from "./cartSlice"; // Handles cart-related state

// Configure the Redux store for the application
const trendycartStore = configureStore({
  reducer: {
    products: productsReducer, // Associate products slice with its reducer
    fetchStatus: fetchStatusReducer, // Associate fetch status slice with its reducer
    cart: cartReducer, // Associate cart slice with its reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Disable immutable state check
      serializableCheck: false, // Disable serializable state check
    }),
});

export default trendycartStore; // Export the configured store for use in the app
