import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any[], args: string, key: string): any[] {
    args =args.toLowerCase();
    if(key == "title")
    {
      // return value.filter(item => item.title.includes(args));
      return value.filter(item =>
        item && item.title && String(item.title).toLowerCase().includes(args)
      );
    }
    
    if(key == "price")
    {
      return value.filter(item => item.price == args);
    }

    return value;


    //  if (!value || !args || !key) return value;

    // const search = args.toString().toLowerCase();

    // return value.filter(item =>
    //   item[key] &&
    //   item[key].toString().toLowerCase().includes(search)
    // );
  }

}
