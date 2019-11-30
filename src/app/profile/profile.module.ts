import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../im-material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
