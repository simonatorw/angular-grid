import {
	Component, 
	OnInit, 
	AfterViewInit, 
	Input, 
	Output, 
	EventEmitter,
	OnChanges
} from '@angular/core';

import { DataService } from './data.service';
import { Title } from '../../data/title';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
	providers: [
		DataService
	],  
})
export class DataGridComponent implements OnChanges, OnInit, AfterViewInit {
	i = 0;

	constructor( public dataService: DataService ) {}

	@Input() title: Title;
	@Input() crap: string;
	@Output() crapChange = new EventEmitter();
	
	ngOnChanges(changes) {
		console.log(changes);
	}
	
	ngOnInit() {
		console.log(this.dataService.getData());
	}
	
	ngAfterViewInit() {
		console.log(document.getElementById('dataGrid').innerText);
	}
	
	sendValue() {
		this.crapChange.emit(this.dataService.getData() + (this.i++));
	}
}
