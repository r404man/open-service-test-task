import { createReducer, on } from '@ngrx/store';
import { CartApiActions } from './cart-api.actions';
import { Product } from 'src/app/interfaces/product.interface';
import { CartComponentActions } from './cart.actions';

export interface CartState {
  cart: Product[];
  cartPrice: number;
}

export const initialState: CartState = {
  cart: [],
  cartPrice: 0,
};

export const cartReducer = createReducer(
  initialState,

  on(CartApiActions.addItemToCart, (state, { item }) => {
    const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
    return {
      ...state,
      cart: existingItem ? [...state.cart] : [...state.cart, item],
    };
  }),

  on(CartComponentActions.removeItemFromCart, (state, { id }) => ({
    ...state,
    cart: state.cart.filter((item) => item.id !== id),
  })),

  on(CartComponentActions.calculateCartPrice, (state) => ({
    ...state,
    cartPrice: state.cart.reduce((acc, curr) => (acc += Number(curr.price)), 0),
  }))
);
