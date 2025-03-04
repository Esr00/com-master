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
// import { NotFoundComponent } from './features/components/not-found/not-found.component';


export const routes: Routes = [
  { path: "", redirectTo:"/home" ,pathMatch:"full" },
  { path: "home", component: HomeComponent , title:"home" },
  { path: "categories", component: CategoriesComponent, title:"categories"},
  { path: "brands", component: BrandsComponent , title:"brands"},
  { path: "products", component: ProductsComponent, title:"products"},
  { path: "wish-list", component: WishListComponent , title:"wish-list"},
  { path: "cart", component: CartComponent, title: "cart" },

  { path: "register", component: RegisterComponent , title:"register"},
  { path: "login", component: LoginComponent , title:"login"},
  { path: "**", component: Component , title:"error 404"},


];


