import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {HttpHeaders} from "@angular/common/http";
import {User} from "./models/User";
import { UserModel } from './models/user-model';
import {Router} from "@angular/router";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Credential: "included",
    method: "POST",
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 currentuser:object;
  url: string;
  constructor(private httpClient: HttpClient , private router : Router) { 
    this.url="http://localhost:8080/AssetWatch";
  }





  CreateUser(user: UserModel){

    return this.httpClient.post('http://localhost:8080/AssetWatch/user/register',user,).subscribe(
      (res) =>  { console.log(res)
      }
    );
  }

  LogginUser(username:string, password: string) {  
    
    let logindto={"username":username,  "password": password}
    return this.httpClient.post('http://localhost:8080/AssetWatch//user/login', logindto,httpOptions).subscribe(
      (res) =>  { 
        console.log(res)
        this.currentuser= res;
        console.log("status"  + res);
      
        //with user login we can some function that check if user log in multiple 
        //component if the user ==undefine or null then bring user back to login page
        localStorage.setItem('SessionUser',JSON.stringify(res)) ;
        //this.GetUser(username, password);

        this.router.navigate(['/dashboard']);
        //return this.currentuser;
      },
      (error)=>{
        console.log(error);
        console.log(error.status);
      }
    );

  }


  


 
}
