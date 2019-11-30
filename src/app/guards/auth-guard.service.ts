import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GeneralAuth implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
         if (localStorage.getItem('currentUser') ){
                 
          
            return true;
         }
      
        this.router.navigate(['login']);
        return false;
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        return this.canActivate(route, state);
    }

   
}
