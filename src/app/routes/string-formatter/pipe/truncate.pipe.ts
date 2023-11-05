import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value == undefined || value == null || value == '') return '';
    return value?.substring(0, 100) + '...';
  }
}
