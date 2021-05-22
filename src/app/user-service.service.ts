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
  userexist: boolean;
  constructor(private httpClient: HttpClient , private router : Router) { 
    this.url="http://localhost:8080/AssetWatch";
    this.userexist=true;
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
      
        localStorage.setItem('SessionUser',JSON.stringify(res)) ;
        this.userexist=true;
        this.router.navigate(['/dashboard']);
        
      },
      (error)=>{
        //console.log(error);
         return  { info: "Cant find user"};
         //this.userexist=false;
        
      }
    );

  }


  


 
}
