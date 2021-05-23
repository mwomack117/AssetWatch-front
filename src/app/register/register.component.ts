import { Component, OnInit } from '@angular/core';
import {UserServiceService}    from   "../user-service.service"
import {UserModel}    from  "../models/user-model";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  Firstname: string;
  Lastname: string;
  Email: string;
  Username: string;
  Password: string;
  valid: boolean[];
  constructor(private userservice: UserServiceService) {
   /*this.valid[0]=false;
   this.valid[1]=false;
    this.valid[2]=false;
    this.valid[3]=false;
    this.valid[3]=false;*/
   
  }

  
  ngOnInit(): void {
  }




  SignupUser() {
   
/*
     console.log( "firstname "+ document.forms["myForm"]["firstname"].value);
     console.log( "lastname "+ document.forms["myForm"]["lastname"].value);
     console.log( "email"+ document.forms["myForm"]["email"].value);
     console.log( " password "+ document.forms["myForm"]["password"].value);
     console.log( "username "+ document.forms["myForm"]["username"].value);
     console.log(document.forms["myForm"]["username"].valid);

     if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.forms["myForm"]["email"].value))
     {
            return true;
     }*/
    /*console.log("hello Firstname " + this.Firstname);
    console.log("hello lastname " + this.Lastname);
    console.log("hello email " + this.Email);
    console.log("hello username " + this.Username);
    console.log("hello password " + this.Password);
    this.userservice.CreateUser(new UserModel(this.Firstname, this.Lastname, this.Username, this.Password, this.Email));*/
  
  }

}
