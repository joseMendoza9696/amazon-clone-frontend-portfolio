import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// THIS IS THE GLOBAL STORE
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
