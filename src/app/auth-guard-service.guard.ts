import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceGuard implements CanActivate {
  
  canActivate(): boolean{
    
    //return !!localStorage.getItem("SessionUser"); 

    console.log( "this is from the session" +
      localStorage.getItem("SessionUser"));
    return !!localStorage.getItem("SessionUser"); 
    
  }
  
}
