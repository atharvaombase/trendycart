import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // console.log("addToCart action received:", action); // Add this line
      const existingItem = state.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteItem: (state, action) => {
      // console.log("deleteItem action received:", action.payload); // Add this line
      return state.filter(item => item._id !== action.payload);
    },
    incrementItem: (state, action) => {
      console.log("incrementItem action received:", action.payload); // Add this line
      const existingItem = state.find(item => item._id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      console.log("decrementItem action received:", action.payload); // Add this line
      const existingItem = state.find(item => item._id === action.payload);
      if (existingItem.quantity <= 1) {
        // dispatch(deleteItem(state, action))
        return state = state.filter(item => item._id !== action.payload);
      }
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
  },
});

// Named exports for actions
export const { addToCart, deleteItem, incrementItem, decrementItem } = cartSlice.actions;

// Default export for reducer
export default cartSlice.reducer;