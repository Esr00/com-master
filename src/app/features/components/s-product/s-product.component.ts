
import { Product } from './../../../product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute, private _ToastrService:ToastrService
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
          this._ToastrService.success('added to cart successfully');
        },
        error: (err) => {
          console.error(err);
          alert('error');
        }
      });
    }
  }
}
