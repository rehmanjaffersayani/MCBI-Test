import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileRoutingModule} from './profile/profile.routing'
import { GeneralAuth } from './guards/auth-guard.service'
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
  
  {
    path: '',
    canActivate: [GeneralAuth],
    redirectTo: 'dashboard', 
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [GeneralAuth] },
{
    path: '',
    
    loadChildren: './profile/profile.module#ProfileModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
