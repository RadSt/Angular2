import {Component} from 'angular2/core';
// селектор исп-ся для вызова DOM в index.html
// Компонент декоратор исп-ся для хранения html разметки
@Component({
   selector: 'pm-app',
   template: `<div><h1>{{pageTitle}}</h1>
   <div>My First Component</div>
   </div>
   `          
})
// Переменная со значением
export class AppComponent {
    pageTitle : string  = 'Acme Product Managment';
}