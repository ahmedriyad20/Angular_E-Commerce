import { Component, effect, inject } from '@angular/core';
import { ProductService } from '../product-service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.html',
  styleUrl: './favorite.css'
})
export class Favorite {
  prdouctServObj = inject(ProductService);
  SelectedProducts!: any;

  product = effect(() => {
    this.SelectedProducts = this.prdouctServObj.getSelectedProductsFromFavorite();
  })

  RemoveProductFromFavorite(product: Iproduct)
  {
    this.prdouctServObj.RemoveProductFromFavorite(product.id);
  }
}
