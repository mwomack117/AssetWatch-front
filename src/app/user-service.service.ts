import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from 'rxjs/operators';
import {HttpHeaders} from "@angular/common/http";
import {User} from "./models/User";
import { UserModel } from './models/user-model';


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

  url: string;
  constructor(private httpClient: HttpClient) { 
    this.url="http://localhost:8080/AssetWatch";
  }





  CreateUser(user: UserModel){

    return this.httpClient.post('http://localhost:8080/AssetWatch/user/register',user,).subscribe(
      (res) =>  { console.log(res)
      }
    );
  }

  LogginUser(username:string, password: string){
    //return this.httpClient.post('${this.url}/user/login');

  }

  


 
}
