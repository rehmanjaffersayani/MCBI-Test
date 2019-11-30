import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {API } from './../app.global'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

   
    private url: string = API["WEB_API"];

    constructor(private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    loginProfile(returnProfile) {
       
        return this.http.post(API["WEB_API"] + 'login', returnProfile)
        .pipe(map(res => {
            if(res['status']){
                localStorage.setItem('currentUser', JSON.stringify(res));
            }
            return res;
        }));
                
    }
        //         console.log(data)
               
        //     return true;
        //     },
        //     error => {
        //     console.error("Error saving food!");
        //     return Observable.throw(error);
        //     });
        //  }

    

    // public getCurrentProfile() {
    //     let p: any;
    //     if (localStorage.getItem('currentUser')) {
    //         p = JSON.parse(localStorage.getItem('currentUser'));
    //         return p.profile;
    //     }
    // }

    
    // public logout() {
    //     let headerOptions = this.getTokenHeader();
    //     var url = API["WEB_API"] + 'logout'
    //     return this.http.post(url, JSON.stringify(""), headerOptions)
    //         .map((res: Response) => res.json())
    //         .catch(this.handleError)
    // }

   
    // private handleError(error: Response | any) {
    //     // In a real world app, you might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         if (error.status == 500) {
    //             return Observable.throw((error.status + ' - ' + error.statusText).toString());
    //         }
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }


}
