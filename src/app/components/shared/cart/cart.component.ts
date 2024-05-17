import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { AppState } from 'src/app/store/app.state';
import { CartComponentActions } from 'src/app/store/cart/cart.actions';
import {
  selectAllCartProducts,
  selectCartPrice,
} from 'src/app/store/cart/cart.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private store: Store<AppState>) {}
  cartPrice$: Observable<number> = this.store.select(selectCartPrice);
  cartItems$: Observable<Product[]> = this.store.select(selectAllCartProducts);

  removeFromCart(id: number): void {
    this.store.dispatch(CartComponentActions.removeItemFromCart({ id }));
  }
}
