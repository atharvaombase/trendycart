import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing the cart state.
 * The state is an array of objects, each representing an item in the cart.
 * Each item has an _id, name, price, and quantity.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: [], // Initial state is an empty array.
  reducers: {
    /**
     * Adds an item to the cart.
     * If the item already exists in the cart, increments its quantity.
     * Otherwise, adds a new item to the cart with a quantity of 1.
     */
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    /**
     * Deletes an item from the cart by its _id.
     */
    deleteItem: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
    /**
     * Increments the quantity of an item in the cart by its _id.
     */
    incrementItem: (state, action) => {
      const existingItem = state.find((item) => item._id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    /**
     * Decrements the quantity of an item in the cart by its _id.
     * If the quantity is 1, removes the item from the cart.
     */
    decrementItem: (state, action) => {
      const existingItem = state.find((item) => item._id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          return state.filter((item) => item._id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, deleteItem, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;

