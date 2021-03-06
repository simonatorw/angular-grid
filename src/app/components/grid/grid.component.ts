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
import { RxService } from '../../services/rx.service';

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
	val2;
	color;
	model = new UserData('Simonator', 1);
	doh: boolean;
	dd = new Date;
	promiseData = this.rxService.getPromise();
	obsData = this.rxService.getObservable();
	obsStr = this.rxService.getObsStr();
	@ViewChild(DataGridComponent) dataGrid: DataGridComponent;
	@ViewChildren(DataGridComponent) dataGrids: QueryList<DataGridComponent>;
	@ViewChild('header') headerTitle: ElementRef;
	@ContentChild(DataGridComponent)  dataGridContent: DataGridComponent;
	//hello
	constructor(
		private store: Store<AppState>,
		private rxService: RxService
	) {
		this.count$ = store.pipe(select('count'));
		console.log('datagrid1:', 'hello', this.dataGrid);
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
		//this.rxService.getObservable().subscribe(data => console.log(data));
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