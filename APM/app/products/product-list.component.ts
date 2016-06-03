import { Component } from 'angular2/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent{
    // связь с переменной в product-list.component.html
   pageTitle: string ='Product List'; 
}