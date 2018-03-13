import { 
	Component, 
	OnInit, 
	AfterViewInit,
	ViewChild,
	ViewChildren,
	QueryList,
	ElementRef,
	ContentChild,
	AfterContentInit
} from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { INCREMENT, DECREMENT, RESET } from '../../store/reducers/counter';
import { Title } from '../../data/title';
import { UserData } from '../../data/user-data';
import { DataGridComponent } from '../data-grid/data-grid.component';

interface AppState {
  count: number;
}

@Component({
  selector: 'grid-comp',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
	animations: [
	  trigger('heroState', [
		state('inactive', style({
		  backgroundColor: '#eee',
		  transform: 'scale(1)'
		})),
		state('active',   style({
		  backgroundColor: 'cyan',
		  transform: 'scale(1.1)'
		})),
		//transition('inactive => active', animate('100ms ease-in')),
		transition('inactive => active', [
		  style({
			backgroundColor: '#cfd8dc',
			transform: 'scale(1.3)'
		  }),
		  animate('80ms ease-in', style({
			backgroundColor: '#eee',
			transform: 'scale(1)'
		  }))
		]),		
		transition('active => inactive', animate('100ms ease-out'))		
	  ])
	]  
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
	count$: Observable<number>;
	submitted;
	state: string = 'active';
	title: Title = {
		id: 1,
		title: 'Dashboard',
		subTitle: 'Market Data'
	};
	title2: Title = {
		id: 2,
		title: 'Dashboard',
		subTitle: 'Research'
	};	
	val = 'foo';
	model = new UserData('Simonator', 1);
	doh: boolean;
	@ViewChild(DataGridComponent) dataGrid: DataGridComponent;
	@ViewChildren(DataGridComponent) dataGrids: QueryList<DataGridComponent>;
	@ViewChild('header') headerTitle: ElementRef;
	@ContentChild(DataGridComponent)  dataGridContent: DataGridComponent;

	constructor(
		private store: Store<AppState>
	) {
		this.count$ = store.pipe(select('count'));
		console.log('datagrid1:', this.dataGrid);
	}
	
	ngAfterContentInit() {
		console.log('contentInit:', this.dataGridContent);
	}
	
	ngAfterViewInit() {
		console.log('datagrid2:', this.dataGrid);
		let grids: Array<DataGridComponent> = this.dataGrids.toArray();
		
		console.log(grids);
		this.headerTitle.nativeElement.textContent = 'Booyah!';
	}
	
	ngOnInit() {
		console.log(1);
	}

	toggleState() {
		this.state = this.state === 'active' ? 'inactive' : 'active';
	}
	
	submitForm() {
		this.submitted = true;
	}
	
	increment() {
		this.store.dispatch({ type: INCREMENT });
	}
	
	decrement() {
		this.store.dispatch({ type: DECREMENT });
	}	
}