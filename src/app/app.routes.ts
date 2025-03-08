import { FPassComponent } from './features/components/f-pass/f-pass.component';
import { routingGuard } from './core/guard/routing.guard';
import { SProductComponent } from './features/components/s-product/s-product.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegisterComponent } from './features/components/register/register.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BrandsComponent } from './features/components/brands/brands.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { HomeComponent } from './features/components/home/home.component';
import { ProductsComponent } from './features/components/products/products.component';
import { WishListComponent } from './features/components/wish-list/wish-list.component';
import { CartComponent } from './features/components/cart/cart.component';
import { nloginGuard } from './core/guard/nlogin.guard';
import { CheckoutComponent } from './features/components/checkout/checkout.component';
// import { NotFoundComponent } from './features/components/not-found/not-found.component';


export const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: "home", component: HomeComponent , title:"home" , canActivate:[routingGuard]  },
  { path: "categories", component: CategoriesComponent, title:"categories" ,canActivate:[routingGuard]},
  { path: "brands", component: BrandsComponent , title:"brands" ,canActivate:[routingGuard]},
  { path: "products", component: ProductsComponent, title:"products" ,canActivate:[routingGuard]},
  { path: "wish-list", component: WishListComponent , title:"wish-list" ,canActivate:[routingGuard]},
  { path: "cart", component: CartComponent, title: "cart",canActivate:[routingGuard] },
  { path: 'checkout/:cartId', component: CheckoutComponent ,title:'checkout' },
  { path: "s-product/:pid", component: SProductComponent , title:"s-product" ,canActivate:[routingGuard]},
  { path: "register", component: RegisterComponent , title:"register" , canActivate:[nloginGuard]},
  { path: "login", component: LoginComponent , title:"login" , canActivate:[nloginGuard]},
  { path: "f-pass", component:FPassComponent , title:"f-pass" },
  { path: "**", component: Component , title:"error 404"},


];

