import { Component, inject } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductService } from '../product-service';
import { ShowMoreInfo } from '../show-more-info';
import { Shadow } from '../shadow';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductCard } from '../product-card/product-card';
import { FilterPipePipe } from '../../pipes/filter-pipe-pipe';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ShowMoreInfo, Shadow, RouterLink, RouterOutlet, ProductCard, FilterPipePipe, FormsModule, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productsList!:  Observable<Iproduct[]>;

  constructor(private productServ: ProductService)
  {
    this.productsList = productServ.getAllProducts();
    console.log(this.productsList);
    
  }
  productService = inject(ProductService)

  AddProductToCart(product: Iproduct)
  {
    //first check if product already in cart
    //if not exists add it to cart
    let selectedProduct = this.productServ.getProductFromCart(product.id)
    
    if(selectedProduct == null)
      this.productService.addSelectedProductToCart(product);
    else
      alert("Product Already in Cart");
  }

  AddProductToFavorite(product: Iproduct)
  {
    //first check if product already in favorite
    //if not exists add it to favorite
    let selectedProduct = this.productServ.getProductFromFavorite(product.id)
    
    if(selectedProduct == null)
      this.productService.addSelectedProductToFavorite(product);
    else
      alert("Product Already in favorite");
  }

  searchText = '';
}
