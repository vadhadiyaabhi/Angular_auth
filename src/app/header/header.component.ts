import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activeLoginClass : boolean = false;
  
  constructor(private _authService : AuthService) { 
    this._authService.activeLoginClass.subscribe(active => {
      this.activeLoginClass = active;
    });
    
  }
  
  loggedIn : boolean = this._authService.tokenExist();

  ngOnInit(): void {
    this._authService.loggedIn.subscribe(val => {
      this.loggedIn = val;
    })
  }

  activeLogin(){
    this._authService.activeLoginClass.next(true);
  }

  Logout(){
    this._authService.Logout();
  }

}
