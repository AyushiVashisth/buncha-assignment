import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a CartItem
interface CartItem {
  product_id: number;
  quantity: number;
}

// Create a cartSlice using createSlice from Redux Toolkit
const cartSlice = createSlice({
  name: "cart", // Specify the name of the slice
  initialState: [] as CartItem[], // Initialize the state as an empty array of CartItems
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Reducer for adding items to the cart
      const existingItem = state.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      // Reducer for removing items from the cart
      const index = state.findIndex(
        (item) => item.product_id === action.payload.product_id
      );

      if (index !== -1) {
        // If the item is found in the cart, remove it
        state.splice(index, 1);
      }
    }
  }
});

// Export the action creators and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
