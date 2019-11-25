import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Component
import {LoginComponent} from './login/login.component'

//Routing
import { SignupRoutingModule } from './signup.routing'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
