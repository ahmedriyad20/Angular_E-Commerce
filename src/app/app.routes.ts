import { Routes } from '@angular/router';
import { ProductDetails } from './product/product-details/product-details';
import { ProductList } from './product/product-list/product-list';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { AddUser } from './add-user/add-user';

export const routes: Routes = [
    {path: "", redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component:Home},
    {path: "productdetails/:id", component:ProductDetails},
    {path: "login", loadComponent:() => import('./login/login').then(l => l.Login)},
    {path: "adduser", component:AddUser},
    {path: "**", component:NotFound}
];
