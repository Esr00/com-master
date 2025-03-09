
export interface Product {
[x: string]: any;
isWishlisted: any;
product: any;
count: any;

  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export
interface cartProduct{
 count:number;
 _id: string;
 product: Product;
 price: number;


}

export
interface Category {
[x: string]: string;
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export
interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}





