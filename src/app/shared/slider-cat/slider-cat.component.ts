import { CategoriesComponent } from './../../features/components/categories/categories.component';
import { ProductsService } from './../../core/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../product';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-cat',
  imports:[CarouselModule],
  templateUrl: './slider-cat.component.html',
  styleUrls: ['./slider-cat.component.scss']
})
export class SliderCatComponent implements OnInit {

  @Input() Categories!: Category[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 3 },
      740: { items: 4 },
      940: { items: 6 }
    },
    nav: true
  };
slide: any;

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    console.log(this.Categories);
  }
}
