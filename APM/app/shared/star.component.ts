import { Component, OnChanges, Input, 
    Output, EventEmitter } from 'angular2/core'

// Общий компонент для звезд в списке.
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
// Наследуется от интерфейса OnChanges 
// метод ngOnChanges() будет запускаться при изменении данных
export class StarComponent implements OnChanges{
    // метод декоратор принимающий значение переменной при запуске из html 
    @Input() rating: number;
    starWidth: number;
    // метод декоратор создающий событие в html
    @Output() ratingClicked: EventEmitter<string> =
     new EventEmitter<string>();
    // событие вызывается при изменении
    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 5;
    }  
    // Создание метода при запуске события  
    onClick(){
        this.ratingClicked.emit(` The rating ${ this.rating } was clicked! `);
    }
}