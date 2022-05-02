import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any = [];
  localItem : string;
  jwt = {
    'token' : "acbdseb3b443b5mn34b63mn345b",
  };

  constructor(private _router: Router) { 
    this.localItem = localStorage.getItem("users") || "";
    if(this.localItem === ''){
      this.users = [];
    }
    else{
      this.users = JSON.parse(this.localItem);
    }
  }

  activeLoginClass = new Subject<boolean>();
  loggedIn = new Subject<boolean>();
  emailExist = new Subject<boolean>();

  checkEmailExist(val: string){
    var found = this.users.find((obj: any) => obj.email === val);
    return found;
  }

  register(userData: any){
    userData.user_id =  Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10);
    let loggedInUser = {
      user_id : userData.user_id,
      firstname : userData.firstname,
      lastname : userData.lastname,
      email : userData.email
    }
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    this.users.push(userData);
    localStorage.setItem("users", JSON.stringify(this.users));
    this._router.navigate(['/todos/MyTodos']);
    return this.users;
  }

  getLoggedInUserDetails(){
    let user = localStorage.getItem('loggedInUser') || '';
    if(user !== ''){
      user = JSON.parse(user);
    }
    return user;
  }

  getLoggedInUserID(){
    let data = localStorage.getItem('loggedInUser') || '';
    if(data !== ''){
      let user = JSON.parse(data);
      return user.user_id;
    }
    return 0;
    
  }

  login(credentials: any){
    let password = credentials.password;
    let username = credentials.username;
    // console.log(this.users);
    // console.log(credentials);
    // var found = this.users.filter((ele: any) => { ele.username === username && ele.password === password} );
    var found = this.users.find((ele:any) =>  ele.username === username && ele.password === password );
    
    if(found !== undefined){
      console.log("logged In")
      this.loggedIn.next(true);
      // found = found[0];
      // console.log(found);
      let loggedInUser = {
        user_id : found.user_id,
        firstname : found.firstname,
        lastname : found.lastname,
        email : found.email
      }
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      return {token : this.jwt.token, data: loggedInUser};
    }
    return false;
  }

  tokenExist(){
    // return !!localStorage.getItem('token');
    return !!localStorage.getItem('token') && localStorage.getItem('token') === this.jwt.token;
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false);
    this._router.navigate(['Home']);
    this.activeLoginClass.next(true);
  }
}
