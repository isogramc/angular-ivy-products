import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFilterPipe'
})
export class IdFilterPipePipe implements PipeTransform {

  transform(data: Array<IProduct>, priceval: string): Array<IProduct> {
    console.log('idFilterPipe');
    console.log(data);
    console.log(priceval);

    if (priceval === ''){

      return data;
    }else {

      const results: Array<IProduct> = new Array<IProduct>();

      for (const [k, entr] of Object.entries(data)) {
        for (const [key, v] of Object.entries(entr)) {
          if (key === 'price'){
            const x = v.toString();
            if (x.indexOf(priceval) !== -1){
              console.log(priceval, v, entr.productId);
              console.log(entr);
              results.push(entr);
            }
          }
        }
      }

      return results;
    }
  }

}