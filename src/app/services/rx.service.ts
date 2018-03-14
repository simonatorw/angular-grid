import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class RxService {

	constructor() { }

	getObservable() {
		let obs = Observable
			.interval(1000)
			.take(100)
			.map(v => {
				const d = new Date();
				
				return `${d.getSeconds()}.${d.getMilliseconds()}`;
			});
			
		return obs;
	}
	
	getPromise() {
		return Promise.resolve('booyah');
	}
	
	getObsStr() {
		return Observable.of('Obi');
	}
}
