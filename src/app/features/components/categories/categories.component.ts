import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ProductsService } from '../../../core/services/products.service';
import { Category, Product } from '../../../product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoderComponent } from "../../../shared/loder/loder.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,  LoderComponent],  // إضافة RouterLink
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  allCategory!: Category[];
  allProduct!: Product[];
  Loading: boolean = true;

  constructor(private _ProductsService: ProductsService, private _AuthService: AuthService) {}

  ngOnInit(): void {
    // جلب التصنيفات
    this._ProductsService.getCategories().subscribe({
      next: (response) => {
        console.log('Categories:', response);
        this.allCategory = response.data;
        this.Loading = false;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
