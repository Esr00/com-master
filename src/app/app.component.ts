import { routes } from './app.routes';
import { Component } from '@angular/core';

// import { LoginComponent } from "./features/components/login/login.component";
// import { RegisterComponent } from "./features/components/register/register.component";

import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { HomeComponent } from './features/components/home/home.component';
import { WishListComponent } from './features/components/wish-list/wish-list.component';
import { ProductsComponent } from './features/components/products/products.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { CartComponent } from './features/components/cart/cart.component';
import { FlowbiteService } from './services/flowbite.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'comm';
  // isCollapsed = true;
}
