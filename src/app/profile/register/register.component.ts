import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//validator
import {MustMatch} from './../../shared/custom.validator'

//services
import {UserService} from './../../services/_user.service'
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  reactiveForm: FormGroup;
  public foods;
  
  constructor(private fb: FormBuilder, private userService:UserService) {}

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.reactiveForm = this.fb.group({
      username: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }
  get f() { return this.reactiveForm.controls; }

  onSubmit() {
  
  
    console.log("button click")

    const formData = new FormData();

const payload = new HttpParams()
  .set('username', this.reactiveForm.value.username)
  .set('email', this.reactiveForm.value.email)
  .set('password', this.reactiveForm.value.password);
  
 
        this.userService.register(payload).subscribe(
            data => { this.foods = data},
            err => console.error(err),
            () => console.log('done loading foods')
          );
        }


}
