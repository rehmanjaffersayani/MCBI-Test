import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
//Services
import { AlertService } from '../../shared/alert.service';
import {AuthenticationService } from './../../services/_authentication.service'
import { SharedService } from './../../shared/shared.service'
import { Event, ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AlertService,AuthenticationService,SharedService]
})
export class LoginComponent implements OnInit {

  _loginForm : FormGroup;
  

  constructor(private fb: FormBuilder,
     private authService:AuthenticationService,
    private _alertService:AlertService,
    private _sharedServices:SharedService,
    public router: Router) {}


  ngOnInit() {
    this.loginForm();
  }

  loginForm(){
    this._loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password:  [null, [Validators.required]],
    });
  }

  get f() { return this._loginForm.controls; }

  onSubmit() {
  
  
    if (this._loginForm.invalid) {
      return;
  }


  const payload = new HttpParams()
    .append('email', this._loginForm.value.email)
    .append('password', this._loginForm.value.password);
    var formData: any = new FormData();
    formData.append('email', this._loginForm.value.email);
    formData.append('password', this._loginForm.value.password);
  
  
          this.authService.loginProfile(payload).subscribe(data => {
          
              if(data['status']){
                this._alertService.showAlert(data['message'])
                this._sharedServices.isLoggedin=true
                this.router.navigate(['/dashboard']);
  
              }else{
                this._alertService.showAlert(data['message'])
                this._sharedServices.isLoggedin=false
              }
            
            },error => {
              this._sharedServices.isLoggedin=false
              if(error['message']){
                this._alertService.showAlert(error['message'])
              
              }
              else{  this._alertService.showAlert("An error occured. Unable to logged In.")
              }
            });
  
          }
  
  
  }
  