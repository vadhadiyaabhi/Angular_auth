import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService) {
    this._authService.activeLoginClass.next(false);
  }

  ngOnInit(): void {
  }

  login(){
    this._authService.activeLoginClass.next(true);  
  }

}
