// OnInit Angular lifecycle interface
import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product'
import { ProductFilterPipe } from './product-filter.pipe'
// подключение кастом pipe

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe]
    // Разметка html в файле, если обьем большой
    // styleUrls: подключение уникального стиля для компонента
    //  ['app/products/product-list.component.css',
    //    'app/products/product-list.component.css']
    // pipes: [ProductFilterPipe] подключение кастом pipe
})

// OnInit Angular lifecycle interface
export class ProductListComponent implements OnInit{
    // связь с переменной в product-list.component.html
   pageTitle: string = 'Product List';
   // переменные свойств сss элемента
   imageWidth: number = 50;
   imageMargin: number = 2;
   // Переменная для кнопки Show Image false-hidden first
   showImage: boolean = false;
   // Параметр (two-way) binding для фильтрации
   listFilter: string = 'cart';
   // Array with products implement IProduct interface
   products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
]; 
// Метод для скрытия показа image тип void
  toggleImage(): void{
      this.showImage = !this.showImage;
  }
  
  ngOnInit(): void{
      console.log('In OnInit');
  }
  
}