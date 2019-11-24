import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Component
import {LoginComponent} from './login/login.component'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }
