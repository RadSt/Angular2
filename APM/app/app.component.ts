import {Component} from 'angular2/core';
// required by Angular HTTP
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features Load library but imports nothing 
//  when library was load javasqript executed

// route providers. Required by route system.
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
// RouteConfig нужен для добавления карты роутингов

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component'
// селектор исп-ся для вызова DOM в index.html
// Компонент-декоратор исп-ся для хранения html разметки
// `разметка` когда нужен небольшой кусок html 
// "разметка" для строки html
// Иcпользование компонента продукт лист в ап компоненте как директива
@Component({
    selector: 'pm-app',
    template: `
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{pageTitle}}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['Welcome']">Home</a></li>
            <li><a [routerLink]="['Products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='cotainer'>
          <router-outlet></router-outlet>
      </div>
    </div>
   `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
    // providers: [ProductService] Регистрируем сервис в корневом компоненте
    // все компоненты входящие в этот, также получают этот сервис
    // HTTP_PROVIDERS required by Angular HTTP
    // ROUTER_PROVIDERS required by route angular2 system
    // [routerLink]="['Welcome']" Создаем ссылку на роут Welcome ROUTER_DIRECTIVES  необходим для этого
    // <router-outlet></router-outlet> добавляется в хостовый главный ts файл для включения ссылок маршрутиации
})
// Переменная со значением
// RouteConfig нужен для добавления карты роутингов
// name: 'Welcome' имя маршрута
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'Product Detail', component: ProductDetailComponent }
])
//  path: '/product/:id' Передача параметра id через маршрут
export class AppComponent {
    pageTitle: string = 'Acme Product Managment';
}