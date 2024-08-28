import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

// Select the 'cart' feature state
const selectCartFeature = createFeatureSelector<CartState>('cart');

// Selector to get all cart items
export const selectCartItems = createSelector(
  selectCartFeature,
  (state: CartState) => state.items
);

// Selector to get the number of items in the cart
export const selectCartItemCount = createSelector(
  selectCartFeature,
  (state: CartState) => state.items.length
);
