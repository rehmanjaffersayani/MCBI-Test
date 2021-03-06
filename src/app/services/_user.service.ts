
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API } from './../app.global'
import { map } from "rxjs/operators"; 


@Injectable({ providedIn: 'root' })
export class UserService {

    private url: string = API["WEB_API"];

    constructor(private http: HttpClient) { }


    register(user) {
        
        return this.http.post(this.url+'register', user)
            .pipe(map(res => res ));
    }

}