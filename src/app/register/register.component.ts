import { Component, OnInit } from '@angular/core';
import {UserServiceService}    from   "../user-service.service"
import {UserModel}    from  "../models/user-model";
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
  constructor(private userservice: UserServiceService) {
   
  }

  
  ngOnInit(): void {
  }




  SignupUser() {
   
    console.log("hello Firstname " + this.Firstname);
    console.log("hello lastname " + this.Lastname);
    console.log("hello email " + this.Email);
    console.log("hello username " + this.Username);
    console.log("hello password " + this.Password);
    this.userservice.CreateUser(new UserModel(this.Firstname, this.Lastname, this.Username, this.Password, this.Email));
  
  }

}
