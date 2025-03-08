import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ProductsService } from '../../../core/services/products.service';
import { LoderComponent } from '../../../shared/loder/loder.component';

@Component({
  selector: 'app-brands',
  imports: [ LoderComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  Loading: boolean = true;
allBrands!:any;

  constructor(private _ProductsService: ProductsService, private _AuthService: AuthService) {}

  ngOnInit(): void {
    // جلب التصنيفات
    this._ProductsService.getBrands().subscribe({
      next: (response) => {
        console.log('Brands:', response);
        this.allBrands = response.data;
        this.Loading = false;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
