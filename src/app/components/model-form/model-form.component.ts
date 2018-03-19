import { Component, OnInit } from '@angular/core';
import {
	ReactiveFormsModule,
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  constructor() { }

  options: string[] = [
	'booyah',
	'doh',
	'duh'
  ];
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  
	ngOnInit() {
		this.firstName = new FormControl('', Validators.required);
		this.lastName = new FormControl('', Validators.required);
		this.email = new FormControl();
		this.password = new FormControl();
		this.language = new FormControl();
		
		this.myForm = new FormGroup({
			name: new FormGroup({
				firstName: this.firstName,
				lastName: this.lastName
			}),
			email: this.email,
			password: this.password,
			language: this.language
		});
	}
  


}
