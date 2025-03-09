import { Product } from './../../product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


numOfCartItem=signal(0);

  [x: string]: any;

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/products');
  }


  getAllCategories():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  getSpecificProduct(productId:any):Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
  }

  addProductToCart(mytoken:any, pId:any):Observable<any>{
    return this.http.post("https://ecommerce.routemisr.com/api/v1/cart", { productId: pId },
     { headers: { token: mytoken } });

  }

  getLoggedusercart(): Observable<any> {
    let mytoken = localStorage.getItem('token') || '';
    return this.http.get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: { token: mytoken }
    });
  }


  updatecartproduct(mycount:any , id: any): Observable<any> {
    let mytoken :any = localStorage.getItem('token') || '';
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {count:mycount}, {
      headers: { token: mytoken }
    });
  }

  removecartproduct( id: any): Observable<any> {
    let mytoken :any = localStorage.getItem('token') || '';
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      headers: { token: mytoken }
    });
  }



  checkOut(cartId:any,addressData:any ):Observable<any>{
    let mytoken :any = localStorage.getItem('token') || '';
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, {
     shippingAddress:addressData,Headers: { token: mytoken }
    });
  }

  getProducts():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  getCategories():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/categories');
  }



  addProductToWishlist(mytoken:any, pId:any):Observable<any>{
    return this.http.post("https://ecommerce.routemisr.com/api/v1/wishlist", { productId: pId },
     { headers: { token: mytoken } });

  }


  getloggedUserWishlist(): Observable<any> {
    let mytoken = localStorage.getItem('token') || '';
    return this.http.get("https://ecommerce.routemisr.com/api/v1/wishlist", {
      headers: { token: mytoken }
    });
  }

  removeWishlist( id: any): Observable<any> {
    let mytoken :any = localStorage.getItem('token') || '';
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
      headers: { token: mytoken }
    });
  }

  getBrands():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/brands');
  }


}


