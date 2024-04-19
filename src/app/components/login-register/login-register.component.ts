import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  registerForm : boolean = false;
  loginForm :boolean = true;
  forgetForm :boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.onPageloadform(); 
  }

  onPageloadform(){
    this.loginForm = true;
    this.registerForm = false;
    this.forgetForm = false
  }

  openRegisterForm(){
    this.registerForm = true;
    this.loginForm = false;
    this.forgetForm = false;
  }

  openForgetForm(){
    this.forgetForm = true;
    this.loginForm = false;
    this.registerForm = false;
  }


}
