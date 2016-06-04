// OnInit Angular lifecycle interface
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
// подключение кастом pipe

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
    // Разметка html в файле, если обьем большой
    // styleUrls: подключение уникального стиля для компонента
    //  ['app/products/product-list.component.css',
    //    'app/products/product-list.component.css']
    // pipes: [ProductFilterPipe] подключение кастом pipe
    // directives: [StarComponent] use component as a directive
    // ROUTER_PROVIDERS required by route angular2 system
})

// OnInit Angular lifecycle interface
export class ProductListComponent implements OnInit {
    // связь с переменной в product-list.component.html
    pageTitle: string = 'Product List';
    // переменные свойств сss элемента
    imageWidth: number = 50;
    imageMargin: number = 2;
    // Переменная для кнопки Show Image false-hidden first
    showImage: boolean = false;
    // Параметр (two-way) binding для фильтрации
    listFilter: string;
    // Array with products implement IProduct interface
    products: IProduct[];
    errorMessage: string;
    
    //  Конструктор для обьявления сервиса ProductService
    constructor(private _productService: ProductService) {

    }

    // Метод для скрытия показа image тип void
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    // Событие при инициализации компонента
    // подписываемся на метод из сервиса
    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(
            products => this.products = products, 
            error => this.errorMessage = <any>error);        
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + message;
    }

}