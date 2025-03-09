import { RouterLink } from '@angular/router';
import { cartProduct, Product } from './../../../product';
import { ProductsService } from './../../../core/services/products.service';
import { Component } from '@angular/core';
import { LoderComponent } from "../../../shared/loder/loder.component";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  imports: [LoderComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
[x: string]: any;

constructor(private _ProductsService:ProductsService,
 private _ToastrService:ToastrService ){}

cartData: any;


Products!:cartProduct[]

loading: boolean=true;


ngOnInit():void{
this._ProductsService.getLoggedusercart().subscribe({
next : (res) => {
  console.log(res);
  this.loading=false;

  this.cartData =res;
  this.Products=res.data.products;
},
error:(err) => {
  console.log(err);
}
});
}

updateCart(count : any , id : any ){
  this._ProductsService.updatecartproduct(count , id).subscribe({
    next : (res) => {
      console.log(res);
      this._ToastrService.success('update');
      this.cartData =res;
      this.Products=res.data.products;


},
    error:(err) => {
      console.log(err);
    }
  });
}

removeItem( id : any ){
  this._ProductsService.removecartproduct( id).subscribe({
    next : (res) => {
      console.log(res);
      this._ToastrService.success('removed');
      this.cartData =res;
      this.Products=res.data.products;


},
    error:(err) => {
      console.log(err);



    }
  });
}

}
