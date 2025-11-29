import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../product-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  activeRoute = inject(ActivatedRoute);
  id = this.activeRoute.snapshot.params['id'];

  productServ = inject(ProductService);
  selectedProduct = this.productServ.getProductById(this.id);
  // this.selectedProduct = this.selectedProduct | async
  router = inject(Router);
  GoBackToProductsList()
  {
    this.router.navigate(['home'])
  }
}
