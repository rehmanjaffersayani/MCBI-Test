import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../im-material.module'

//Import Component
import {LoginComponent} from './login/login.component'

//Routing
import { ProfileRoutingModule } from './profile.routing'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ImMaterialModule
  ]
})
export class ProfileModule { }
