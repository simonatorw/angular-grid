import { Component, OnInit } from '@angular/core';
import {
	FormsModule,
	FormGroup,
	FormControl
} from '@angular/forms';
import { ViewChild } from '@angular/core';

class Signup {
	constructor(
		public firstName: string = '',
		public lastName: string = '',
		public email: string = '',
		public password: string = ''
	) {}
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

	constructor() { }
	
	options: string[] = [
	'booyah',
	'doh',
	'duh'
	];
	model: Signup = new Signup();
	@ViewChild('f') form: any;
	
	ngOnInit() {
	}
	
	onSubmit() {
		this.form.reset();
		console.log('submitted');
	}
	
	

}
