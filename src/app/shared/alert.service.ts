import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }


  showAlert(message){
    this.snackBar.open(message, '' ,{duration: 3000});

  }

  
   
}



