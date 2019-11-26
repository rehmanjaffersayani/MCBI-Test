import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../im-material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Component
import {LoginComponent} from './login/login.component'

//Routing
import { ProfileRoutingModule } from './profile.routing';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ImMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
