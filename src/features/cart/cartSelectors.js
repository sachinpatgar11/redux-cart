import { createSelector } from "@reduxjs/toolkit";

// Get all cart items
export const selectCartItems = (state) => state.cart.items;

// Get an individual cart item by product ID
export const selectCartItemById = (state, productId) =>
  selectCartItems(state).find((item) => item.id === productId);

// Calculate total quantity
export const selectCartTotalQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0),
);

// Calculate total price
export const selectCartTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0),
);
