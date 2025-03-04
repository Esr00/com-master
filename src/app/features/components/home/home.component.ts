import { ProductsService } from '../../../core/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor (private _ProductsService:ProductsService){}

ngOnInit(): void{
  this._ProductsService.getAllProducts().subscribe({
    next:(res)=>{ console.log("res");
    },

  error:(err)=>{console.log("err");
  }
})
}

}
