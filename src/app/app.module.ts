import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataService } from './services/data.service';
import { HighlightDirective } from './directives/highlight.directive';
import { AtorPipe } from './pipes/ator.pipe';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { counterReducer } from './store/reducers/counter';
import { ContentComponent } from './components/content/content.component';
import { GreyDirective } from './directives/grey.directive';

const DUH = new InjectionToken<string>('duh');

@NgModule({
  declarations: [
    AppComponent,
	GridComponent,
	DataGridComponent,
	HighlightDirective,
	AtorPipe,
	ReactiveFormComponent,
	ContentComponent,
	GreyDirective
  ],
  imports: [
    BrowserModule,
	FormsModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [
		DataService,
		{ provide: DUH, useValue: 'duh' }
	],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(
		@Inject(DUH) public duh: string

	) {
		console.log(this.duh);
	}
}
