import { Injectable } from 'angular2/core'
import { IProduct } from './product'
// required by Angular HTTP
import { Http, Response } from 'angular2/http'
import { Observable } from 'rxjs/Observable'
// Service класс созданный для определенной цели helper 
// для исп-ия используется dependency инжектор.
@Injectable()
export class ProductService {
    // Ссылка на Url в примере локальный файл
    private _productUrl = 'api/products/products.json';
    
    constructor(private _http: Http){ }
    
    // Http GET request method for desearealizing response json to object
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
        .map((response: Response) => <IProduct[]>response.json())
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    // do operator сереализует сообщение в строку
    // метод для записи ошибки в консоль
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}