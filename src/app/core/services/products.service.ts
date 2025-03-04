import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/products');
  }
}
