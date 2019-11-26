import { Component, OnInit } from '@angular/core';

//Services
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AlertService]
})
export class LoginComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {

  }

  loggedin(event) {
    this.alertService.showAlert("Changed month from the Dropdown")
   
    console.log(event);
 }

}
