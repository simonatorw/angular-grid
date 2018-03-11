import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Address } from '../../data/address';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
	fooForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.createForm();
	}

  ngOnInit() {
  }
	createForm() {
		this.fooForm = this.fb.group({
			name: ['', Validators.required],
			address: this.fb.group(new Address())
		})
		
	}

}
