import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared/shared.service'
import { Event, ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers:[SharedService]
})
export class ToolbarComponent implements OnInit {
  public loginState: boolean = false;
  constructor(
    public sharedService: SharedService,
    public router: Router){ }


  ngOnInit() {
   
      if (localStorage.getItem('currentUser'))
        this.sharedService.isLoggedin = true;
        else
        this.sharedService.isLoggedin=false;
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      this.sharedService.isLoggedin=false;
     
      this.loginState = false;
      window.localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }
}
