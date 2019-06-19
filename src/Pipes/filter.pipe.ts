import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
class FilterPipe implements PipeTransform {

  transform(value: any, price: number, propName: string ): any {
    if (value.length === 0 || price === undefined) {
      return value;
    }
    const results = [];
    for (const item of value) {
      // tslint:disable-next-line:radix
      if (item[propName] === parseInt(String(price))) {
        results.push(item);
      }
    }
    return results;
  }

}

export default FilterPipe;
