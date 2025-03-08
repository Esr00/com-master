import { cartProduct, Product } from './../../../product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { LoderComponent } from "../../../shared/loder/loder.component";

@Component({
  selector: 'app-wish-list',
  imports: [LoderComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
[x: string]: any;


wishlistData: any;
Products!:any[]
loading: boolean=true;


constructor(private _ProductsService:ProductsService){}


ngOnInit():void{
this._ProductsService.getloggedUserWishlist().subscribe({
next : (res) => {
  console.log(res);
  this.loading=false;

  this.wishlistData =res;
  this.Products=res.data;
},
error:(err) => {
  console.log(err);
}
});
}


removeItem( id : any ){
  this._ProductsService.removeWishlist( id).subscribe({
    next : (res) => {
      console.log(res);

      this.wishlistData =res;
      this.Products=res.data;


},
    error:(err) => {
      console.log(err);
    }
  });
}

}


//   constructor(private _ProductsService:ProductsService){}

//   loading: boolean=true;
//   wishlistData!:Product[];

//   ngOnInit(): void {
//     this._ProductsService.getloggedUserWishlist().subscribe({
//       next: (res) => {
//         console.log(res);
//         this.wishlistData = res.data.Product;
//             this.loading = false;
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }

// }
