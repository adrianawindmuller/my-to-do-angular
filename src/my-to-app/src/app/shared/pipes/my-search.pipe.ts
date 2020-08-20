import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySearch',
  pure: false,
})
export class MySearchPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    filter = filter ? filter.toLocaleLowerCase() : null

    return filter ? items.filter(item => item.descricao.toLocaleLowerCase().indexOf(filter) !== -1) : items
  }
}
