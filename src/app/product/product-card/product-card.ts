import { Component, inject, input } from '@angular/core';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { CurrencyPipe } from '@angular/common';
import { TxtslicePipePipe } from '../../pipes/txtslice-pipe-pipe';
import { FilterPipePipe } from '../../pipes/filter-pipe-pipe';
import { Shadow } from '../shadow';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe, TxtslicePipePipe, FilterPipePipe, Shadow],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  productInput = input.required<Iproduct>();
  productService = inject(ProductService);

  AddProductToCart(product: Iproduct)
  {
    //first check if product already in cart
    //if not exists add it to cart
    let selectedProduct = this.productService.getProductFromCart(product.id)
    
    if(selectedProduct == null)
      this.productService.addSelectedProductToCart(product);
    else
      alert("Product Already in Cart");
  }

  AddProductToFavorite(product: Iproduct)
  {
    //first check if product already in favorite
    //if not exists add it to favorite
    let selectedProduct = this.productService.getProductFromFavorite(product.id)
    
    if(selectedProduct == null)
      this.productService.addSelectedProductToFavorite(product);
    else
      alert("Product Already in favorite");
  }
}
