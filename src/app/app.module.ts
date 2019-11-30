import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//routing
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import {ToolbarComponent } from './toolbar/toolbar.component'
//Node Module
import { HttpClientModule } from '@angular/common/http'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Modules
import { ImMaterialModule } from './im-material.module';
import { ProfileModule} from './profile/profile.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import { GeneralAuth } from "./guards/auth-guard.service";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    ImMaterialModule,
    ProfileModule,
    
    

  ],
  providers: [GeneralAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
