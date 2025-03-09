import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { Category, Product } from './../../../product';
import { ProductsService } from '../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { LoderComponent } from "../../../shared/loder/loder.component";
import { SliderCatComponent } from "../../../shared/slider-cat/slider-cat.component";
import { AuthService } from '../../../core/services/auth/auth.service';
import { response } from 'express';
import { error, count } from 'console';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from "../../../core/pipes/search.pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [LoderComponent, SliderCatComponent, RouterLink, SearchPipe, FormsModule],
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

  inWishlist = true;

constructor (
  private _ProductsService:ProductsService
  ,private _AuthService:AuthService,
  private _ToastrService:ToastrService){
  if(typeof localStorage!=='undefined'){ console.log(localStorage);
  }
}

ngOnInit(): void{
  // this._ToastrService.success('hi');

  this._ProductsService.getLoggedusercart().subscribe({
    next:(response)=>{ console.log(response.data);


      this._ProductsService.numOfCartItem.set(response.numOfCartItems);
    },

  error:(err)=>{console.log(err);

  }


  })
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
        this._ToastrService.success('added to cart successfully');
        // this._ProductsService.numOfCartItem.set(response.numOfCartItems);
        console.log(res);



      }
    });
  }
}


addToWishlist(product: any) {
  if (this._AuthService.login.value) {
    let myToken = localStorage.getItem('token');
    this._ProductsService.addProductToWishlist(myToken, product.id).subscribe({
      next: (res: any) => {
        console.log(res);
        // تعيين الخاصية بحيث تظل الأيقونة خضراء
        product.inWishlist = true;
        this._ToastrService.success('Product added to wishlist!');
      },
      error: (err: any) => {
        console.error(err);
        this._ToastrService.error('Error adding product to wishlist');
      }
    });
  }
}

}
