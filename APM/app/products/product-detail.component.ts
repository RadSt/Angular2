import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router'
// не вложенный компонент без селектора будет добавлен в приложение через роутинг
//  является родительской другой страницей 
@Component({
   templateUrl: 'app/products/product-detail.component.html'    
})

export class ProductDetailComponent{
    pageTitle: string = 'Product detail';
    
    // Конструктор который принимает параметры в переменную private _routeParams
    // Получаем параметр по id `: ${id}`
    constructor(private _routeParams: RouteParams,
                private _router: Router){
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}` ;
    }
        
    onBack(): void{
        this._router.navigate(['Products']);
    }
    // this._router.navigate(['Products']); Переход через код
}