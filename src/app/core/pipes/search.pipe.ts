import { Product } from './../../product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( Products:Product[],searchWord:string) :Product[] {
    return Products.filter(Product=>Product.title.includes(searchWord))
  }

}
