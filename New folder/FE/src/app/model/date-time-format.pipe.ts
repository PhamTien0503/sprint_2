import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'datetimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(value: Date | string, formatString: string = 'dd/MM/yyyy HH:mm:ss'): string {
    if (!value) {
      return '';
    }
    return format(new Date(value), formatString);
  }
}
