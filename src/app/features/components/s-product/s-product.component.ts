// import { Product } from './../../../product';
// import { Component, Inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductsService } from '../../../core/services/products.service';
// import { response } from 'express';

// @Component({
//   selector: 'app-s-product',
//   imports: [],
//   templateUrl: './s-product.component.html',
//   styleUrl: './s-product.component.scss'
// })
// export class SProductComponent {
// addToCart(arg0: any) {
// throw new Error('Method not implemented.');
// }
// product: any;
//   constructor(
//     private _ProductsService: ProductsService,
//     private route: ActivatedRoute
//   ) {}
//   productDetails !:Product;
//   ngOnInit(): void {
//     const productId = this.route.snapshot.params['pid'];
//     console.log(productId);
//     this._ProductsService.getSpecificProduct(productId).subscribe(response => {
//       this.productDetails = response.data;
//       console.log(this.productDetails);
//     });
//   }



// }



import { Product } from './../../../product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-s-product',
  templateUrl: './s-product.component.html',
  styleUrls: ['./s-product.component.scss']
})
export class SProductComponent {
  productDetails!: Product;

  constructor(
    private _ProductsService: ProductsService,
    private _AuthService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['pid'];
    console.log(productId);
    this._ProductsService.getSpecificProduct(productId).subscribe(response => {
      this.productDetails = response.data;
      console.log(this.productDetails);
    });
  }

  addToCart(productId: any): void {

    if (this._AuthService.login.value) {
      const myToken = localStorage.getItem('token');
      this._ProductsService.addProductToCart(myToken, productId).subscribe({
        next: (res) => {
          console.log(res);
          alert('add');
        },
        error: (err) => {
          console.error(err);
          alert('error');
        }
      });
    } else {
      alert('يجب تسجيل الدخول أولا');
      // يمكنك إضافة إعادة توجيه لصفحة تسجيل الدخول هنا إذا رغبت
    }
  }
}
