import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, field: number): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    if(field === 0){
      array.sort((a: any, b: any) => {
        if (a.stoimost < b.stoimost) {
          return -1;
        } else if (a.stoimost > b.stoimost) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if(field === 1){
      array.sort((a: any, b: any) => {
        if (a.stoimost > b.stoimost) {
          return -1;
        } else if (a.stoimost < b.stoimost) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

}
