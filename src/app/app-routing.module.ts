import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  {
    path: 'categories',
    canActivate: [authGuard],
    component: CategoriesComponent,
  },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  {
    path: 'productdetails/:id',
    canActivate: [authGuard],
    component: ProductdetailsComponent,
  },
  {
    path: 'categorydetails/:id',
    canActivate: [authGuard],
    component: CategoryDetailsComponent,
  },
  {
    path: 'shippingdetails',
    canActivate: [authGuard],
    component: ShippingDetailsComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
