import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload.data; // ✅ Replace state correctly
    },
    addProduct: (state, action) => {
      state.push(action.payload); // ✅ Correct way to add product
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer; // ✅ Correctly exporting only the reducer
