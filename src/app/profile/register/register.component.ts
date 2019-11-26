import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reactiveForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.reactiveForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

}
