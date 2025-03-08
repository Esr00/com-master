
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../core/services/products.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  cartId!: string;

  constructor (private _ProductsService:ProductsService
    ,private _ActivatedRoute: ActivatedRoute){}




  addressForm = new FormGroup({
    phone: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    details: new FormControl(null, Validators.required),
  });
onlinePayment(formData:any){

let id =this._ActivatedRoute.snapshot.params?.['cardId']

console.log(formData);

  if(formData.valid){
    this._ProductsService['checkOutSession'](id , formData.value).subscribe({
  next: (res: any) => {
    console.log(res);

location.href = (res as any).session.url;

    alert('add');

  },
  error: (err: any) => {
    console.error(err);



  }
});
}}
}
