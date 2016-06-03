import {Component} from 'angular2/core';

import { ProductListComponent } from './products/product-list.component'

// селектор исп-ся для вызова DOM в index.html
// Компонент декоратор исп-ся для хранения html разметки
// `разметка` когда нужен небольшой кусок html 
// "разметка" для строки html
// Иcпользование компонента продукт лист в ап компоненте как директива
@Component({
   selector: 'pm-app',
   template: `<div><h1>{{pageTitle}}</h1>
       <pm-products></pm-products>
   </div>
   `,
   directives: [ProductListComponent]         
})
// Переменная со значением
export class AppComponent {
    pageTitle : string  = 'Acme Product Managment';
}