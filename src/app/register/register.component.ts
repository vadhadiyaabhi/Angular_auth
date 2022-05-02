import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';
import { PasswordValidator } from '../Shared/password.validator';
import { forbiddenNameValidator } from '../Shared/username.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public hide: boolean = true;
  register: FormGroup;
  activeLoginClass : boolean = false;
  users: any = [];
  registered: boolean = false;
  emailAlreadyExist : boolean = false;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    this._authService.activeLoginClass.next(false);
   }

  ngOnInit(): void {
    this.register = this._fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9@#&_\*\.]*[^\s][a-zA-Z0-9@#&_\*\.]$'),forbiddenNameValidator(/password/), forbiddenNameValidator(/username/)]],
      firstname: ['', [Validators.required, Validators.pattern('[^\\s][a-zA-Z][a-zA-Z]+$')]],
      lastname: ['', [Validators.required, Validators.pattern('[^\\s][a-zA-Z][a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,14}')]],
      confPass: ['', Validators.required],
    }, { validators : PasswordValidator })
  }

  emailExist(val: string){
    console.log(val);
    var found = this._authService.checkEmailExist(val);
    console.log(found);
    if(found === undefined){
      this.emailAlreadyExist = false;
    }
    else{
      this.emailAlreadyExist = true;
    }
  }

  onSubmit(){
    console.log(this.register.value)
    this.users = this._authService.register(this.register.value);
    if(this.users !== undefined){
      this.registered = true;
    }
    console.log(this.users);
  }

  get username(){
    return this.register.get('username');
  }
  get email(){
    return this.register.get('email');
  }
  get password(){
    return this.register.get('password');
  }
  get confPass(){
    return this.register.get('confPass');
  }
  get firstname(){
    return this.register.get('firstname');
  }
  get lastname(){
    return this.register.get('lastname');
  }

  login(){
    this._authService.activeLoginClass.next(true);
  }



}
