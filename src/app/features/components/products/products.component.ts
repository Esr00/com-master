import { ProductsService } from './../../../core/services/products.service';
import { RouterLink } from '@angular/router';
import { Category, Product } from './../../../product';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoderComponent } from "../../../shared/loder/loder.component";
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  imports: [LoderComponent , RouterLink , CurrencyPipe, SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{


[x: string]: any;
inWishlist = true;
allProduct!:Product[];
searchValue:string="";


constructor (private _ProductsService:ProductsService,private _ToastrService:ToastrService ,private _AuthService:AuthService){}



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
        this._ToastrService.success('added to cart successfully');
        console.log(res);

      }
    });
  }
}

addToWishlist(product: any) {
  if (this._AuthService.login.value) {
    let myToken = localStorage.getItem('token');
    this._ProductsService.addProductToWishlist(myToken, product._id).subscribe({
      next: (res) => {
        product.inWishlist = true;
        this._ToastrService.success('Added to wish list successfully');
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}

}
