import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
//validator
import {MustMatch} from './../../shared/custom.validator'

//services
import {UserService} from './../../services/_user.service'
import {AlertService} from './../../shared/alert.service'
 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService,AlertService]
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  public foods;
  
  constructor(private fb: FormBuilder, private userService:UserService,private _alertService:AlertService) {}

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.regForm = this.fb.group({
      username: [null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password:  [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }
  get f() { return this.regForm.controls; }

  onSubmit() {
  
  
    if (this.regForm.invalid) {
      return;
  }

    const formData = new FormData();

const payload = new HttpParams()
  .set('username', this.regForm.value.username)
  .set('email', this.regForm.value.email)
  .set('password', this.regForm.value.password);
  
   

        this.userService.register(payload)
          .subscribe(data => {
            if(data.success){
              this._alertService.showAlert(data.message)

            }else{
              this._alertService.showAlert(data.message)
            }
          
          },error => {
            this._alertService.showAlert("An error occured. Unable to create Profile.")
            
          });

        }


}
