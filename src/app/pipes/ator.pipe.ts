import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ator'
})
export class AtorPipe implements PipeTransform {

	transform(value: string, args: number = 1): any {
		const suf = 'ator'.repeat(args);
		
		return `${value}${suf}`;
	}

}
