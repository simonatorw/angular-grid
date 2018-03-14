import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bleep'
})
export class BleepPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/fuck/gi, '$%#@!');
  }

}
