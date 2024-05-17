import { props, createActionGroup } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';

export const CartApiActions = createActionGroup({
  source: '[Cart API]',
  events: {
    'Add Item To Cart': props<{ item: Product }>(),
  },
});
