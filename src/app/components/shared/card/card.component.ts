import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { TuiModule } from 'src/app/tui.module';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { CartApiActions } from 'src/app/store/cart/cart-api.actions';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TuiModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private store: Store<AppState>) {}

  @Input() product!: Product;

  addToCart(): void {
    this.store.dispatch(CartApiActions.addItemToCart({ item: this.product }));
  }
}
