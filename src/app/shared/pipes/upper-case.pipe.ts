import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('value', value);
    return  value.toUpperCase();
    return null;
  }

}
