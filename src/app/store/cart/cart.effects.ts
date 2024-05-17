import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { AppState } from '../app.state';
import { CartApiActions } from './cart-api.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartComponentActions } from './cart.actions';

@Injectable()
export class CartEffect {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartApiActions.addItemToCart),
      switchMap(() => [CartComponentActions.calculateCartPrice()])
    )
  );

  removeItemFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartComponentActions.removeItemFromCart),
      switchMap(() => [CartComponentActions.calculateCartPrice()])
    )
  );
}
