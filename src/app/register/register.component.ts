import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  Firstname: String;
  Lastname: String;
  Email: String;
  Username: String;
  Password: String;
  constructor() {
   
  }

  
  ngOnInit(): void {
  }




  SignupUser() {
   
    console.log("hello Firstname " + this.Firstname);
    console.log("hello lastname " + this.Lastname);
    console.log("hello email " + this.Email);
    console.log("hello username " + this.Username);
    console.log("hello password " + this.Password);

  
  }

}
