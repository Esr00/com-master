import { ProductsService } from './../../../core/services/products.service';
import { RouterLink } from '@angular/router';
import { Category, Product } from './../../../product';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoderComponent } from "../../../shared/loder/loder.component";
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../core/pipes/search.pipe';

@Component({
  selector: 'app-product',
  imports: [LoderComponent , RouterLink , CurrencyPipe, SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
[x: string]: any;

allProduct!:Product[];
searchValue:string="";
constructor (private _ProductsService:ProductsService ,private _AuthService:AuthService){}



ngOnInit(): void{
  this._ProductsService.getProducts().subscribe({
    next:(response)=>{ console.log(response.data);
      this.allProduct = response.data;


    },

  error:(err)=>{console.log(err);
  }
});

}
addToCart(id: any) {
  if (this._AuthService.login.value) {
    let myToken = localStorage.getItem('token');
    this._ProductsService.addProductToCart(myToken, id).subscribe({
      next: (res) => {
        console.log(res);
        alert('add');
        
      }
    });
  }
}

addToWishlist(id: any) {
  if (this._AuthService.login.value) {
    let myToken = localStorage.getItem('token');
    this._ProductsService.addProductToWishlist(myToken, id).subscribe({
      next: (res) => {
        console.log(res);
        alert('add');
      },
      error:(err: any)=>{console.log(err);}

    });
  }}

}
