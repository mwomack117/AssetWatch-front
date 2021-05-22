import { Component, OnInit } from '@angular/core';
import {UserServiceService}    from   "../user-service.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  cantLogin:string;
   user:any;

  constructor(private userservice: UserServiceService, private router:Router ){ 
    
  }

  ngOnInit(): void {
    this.username="";
    this.password="";
    this.user=null;
    this.cantLogin= "";
    localStorage.removeItem("SessionUser");

  }



  SignInUser(){

    console.log("username is " + this.username);
    console.log("password is " + this.password );
  this.user=this.userservice.LogginUser(this.username, this.password);
  if(this.user!=null)
  {
    //weird logic a to prompt for error but if there a return an error happen
     this.cantLogin= "Can't Login User";
  }

  
    
}


}