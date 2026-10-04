import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
    localStorage.setItem("theme", state.theme.mode);
  } catch (error) {
    console.error("Failed to save Redux state to localStorage", error);
  }
});
