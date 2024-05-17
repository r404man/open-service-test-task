import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducers';
import { CartEffect } from './cart/cart.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      cart: cartReducer,
    }),
    EffectsModule.forRoot([CartEffect]),
  ],
})
export class AppStateModule {}
