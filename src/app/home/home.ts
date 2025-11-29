import { Component, effect, signal } from '@angular/core';
import { ProductList } from '../product/product-list/product-list';
import { Aside } from '../aside/aside';

@Component({
  selector: 'app-home',
  imports: [ProductList, Aside],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 
}
