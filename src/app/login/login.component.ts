import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor() { 
    
  }

  ngOnInit(): void {
    this.username="";
    this.password="";
  }




  SignInUser(){

    console.log("username is " + this.username);
    console.log("password is " + this.password );
  }
}
