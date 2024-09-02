
import { createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.actions';
import { Product } from '../model/productInterface';
import { count } from 'rxjs';


export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items:[...state.items,product]
 }))
);
