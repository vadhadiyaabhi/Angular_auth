import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('close') close: ElementRef;
  @Input('openLogin') login: boolean;
  activeClass : boolean = false;
  // loginForm : FormGroup;
  loggedIn: any;
  registered : boolean = false;
  invalidCredentials: boolean = false;

  constructor( private renderer: Renderer2,
               private _authService: AuthService,
               private _fb: FormBuilder,
               private _router: Router)
              { 
                  this._authService.activeLoginClass.subscribe(active => {
                    this.activeClass = active;
                  })
              }

  ngOnInit(): void {
  }

  loginForm = this._fb.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9@#&_\*\.]*[^\s][a-zA-Z0-9@#&_\*\.]$')]],
    password: ['', Validators.required]
  })

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }


  closeLogin(){
    // console.log(this.close.nativeElement);
    // this.renderer.removeClass(this.close.nativeElement, 'active');
    this._authService.activeLoginClass.next(false);
  }

  onSubmit(){
    // console.log(this.loginForm.value);
    this.loggedIn = this._authService.login(this.loginForm.value);
    if(this.loggedIn !== false){
      // this.loginForm.reset();
      localStorage.setItem('token', this.loggedIn.token);
      this._router.navigate(['todos/MyTodos']);
    }
    else{
      this.invalidCredentials = true;
    }
  }

}
