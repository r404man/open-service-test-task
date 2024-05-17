import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';
import { AppState } from '../app.state';

export const selectCartPoducts = (state: AppState) => state.cart;

export const selectAllCartProducts = createSelector(
  selectCartPoducts,
  (state: CartState) => {
    return state.cart;
  }
);

export const selectCartPrice = createSelector(
  selectCartPoducts,
  (state: CartState) => {
    return state.cartPrice;
  }
);
