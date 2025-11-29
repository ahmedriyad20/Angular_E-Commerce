import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtslicePipe'
})
export class TxtslicePipePipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.slice(0, args);
  }

}
