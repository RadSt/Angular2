import { PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';
// Custom Pipe Для фильтрации
@Pipe({
    name: 'productFilter'
})
// Класс для фильтрации списка продуктов 
// ): (value: IProduct[] - список для фильтрации, args: string[] строка для фильтрации ):
// IProduct[] - возвращаемое значение
export class ProductFilterPipe implements PipeTransform{
    transform(value: IProduct[], args: string[]): IProduct[]{
        // переменная со значением для фильтрации приведенная к необходисому виду.
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;
        return filter ? value.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
} 