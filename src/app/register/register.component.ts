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
  fnvalid: boolean;
  lnvalid:boolean;
  usernamevalid: boolean;
  passvalid: boolean;
  emailvalid:boolean;
  invalidmessage:string;

  constructor(private userservice: UserServiceService) {

   
  }

  
  ngOnInit(): void {
    this.invalidmessage="";
  }




  SignupUser() {
   
   this.fnvalid=true;
   this.lnvalid=true;
   this.passvalid=true;
   this.usernamevalid=true;
   this.emailvalid=true; 
    let start=0;
     this.invalidmessage="";
    //firstname
    let fname=document.forms["myForm"]["firstname"].value;
    for(start ; start< 1; start++){

    if(fname.length <3)
      {
        this.fnvalid=false;
        this.invalidmessage= "firstname need to be at least three characters";
        break;
      }
    //last name 
    let lname=document.forms["myForm"]["lastname"].value;
    if(lname.length <3)
      {
        this.lnvalid=false;
        this.invalidmessage= "lastname need to be at least three letters";
        break;
      }
    //email 
     this.emailvalid=false;
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.forms["myForm"]["email"].value))
    {

      this.emailvalid=true;
      console.log("email is valid");
      
           //return true;
          
    }
    if(this.emailvalid==false){
      this.invalidmessage= "Email is not valid  @email.com";
      break;
    }
    
    let usname=document.forms["myForm"]["username"].value;
    if(usname.length <3)
      {
        this.usernamevalid=false;
        this.invalidmessage= "username need to be at least three letters";
        break;
      }


      let passname=document.forms["myForm"]["password"].value;
      if(passname.length <3)
        {
         this.passvalid=false;
         this.invalidmessage= "password need to be at least three letters";
         break;
        }
  
      }
     

        if(start==1)
      this.userservice.CreateUser(new UserModel(this.Firstname, this.Lastname, this.Username, this.Password, this.Email))

    /* if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.forms["myForm"]["email"].value))
     {
      console.log("email is valid");
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
