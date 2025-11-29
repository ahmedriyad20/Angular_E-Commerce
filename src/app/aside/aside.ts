import { Component } from '@angular/core';
import { ProductCart } from '../product/product-cart/product-cart';
import { Favorite } from '../product/favorite/favorite';

@Component({
  selector: 'app-aside',
  imports: [ProductCart, Favorite],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {

}
