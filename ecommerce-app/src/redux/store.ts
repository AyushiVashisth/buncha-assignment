// Import necessary modules from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Create the Redux store using configureStore
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign the cartReducer to the 'cart' slice of the store
  },
});

// Define types for dispatch and state using TypeScript
export type AppDispatch = typeof store.dispatch; // AppDispatch type represents the store's dispatch function
export type RootState = ReturnType<typeof store.getState>; // RootState type represents the shape of the store's state
