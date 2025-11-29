import { Component, effect, inject } from '@angular/core';
import { ProductService } from '../product-service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css'
})
export class ProductCart {
  productServObj = inject(ProductService);
  SelectedProducts: any;

  product = effect(() => {
    this.SelectedProducts = this.productServObj.getSelectedProductsFromCart();
  })

  RemoveProductFromCart(product: Iproduct)
  {
    this.productServObj.RemoveProductFromCart(product.id)
  }
}
