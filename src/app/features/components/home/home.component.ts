import { RouterLink } from '@angular/router';
import { Category, Product } from './../../../product';
import { ProductsService } from '../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { LoderComponent } from "../../../shared/loder/loder.component";
import { SliderCatComponent } from "../../../shared/slider-cat/slider-cat.component";
import { AuthService } from '../../../core/services/auth/auth.service';
import { response } from 'express';
import { error } from 'console';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from "../../../core/pipes/search.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [LoderComponent, SliderCatComponent, RouterLink, CurrencyPipe, SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
name: any;
toggleFavorite() {
throw new Error('Method not implemented.');
}
  allProduct!:Product[];
  allCategories!:Category[];
  searchValue:string="";

constructor (
  private _ProductsService:ProductsService
  ,private _AuthService:AuthService,){
  if(typeof localStorage!=='undefined'){ console.log(localStorage);
  }
}

ngOnInit(): void{

  this._ProductsService.getAllProducts().subscribe({
    next:(response)=>{ console.log(response.data);
      this.allProduct=response.data;
    },

  error:(err)=>{console.log(err);

  }
});


this._ProductsService.getAllCategories().subscribe({
  next:(res)=>{ console.log(res);
    this.allCategories = res.data;

  },

error:(err: any)=>{console.log(err);
}
})
}


addToCart(id: any) {
  if (this._AuthService.login.value) {
    let myToken = localStorage.getItem('token');
    this._ProductsService.addProductToCart(myToken, id).subscribe({
      next: (res) => {
        console.log(res);



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
