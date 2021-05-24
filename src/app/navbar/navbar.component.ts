import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*isLoggedIn: boolean = localStorage.getItem("SessionUser") !== null ? true : false;
  isLoggedOut: boolean = localStorage.getItem("SessionUser") == null ? true : false;*/
  isLoggedIn:boolean;
  isLoggedOut:boolean;
  ngOnInit(): void {
    console.log(localStorage.getItem("SessionUser"));
    //this.isLoggedIn= false; 
    //his.isLoggedOut=true;

    if(localStorage.getItem("SessionUser") !== null)
   {
          this.isLoggedIn=true;
          //this.isLoggedOut=false;
   }
   if(localStorage.getItem("SessionUser") == null)
   {
          this.isLoggedOut=true;
          //this.isLoggedIn=false;
   }

  }
  ngOnchanges(){
   if(localStorage.getItem("SessionUser") !== null)
   {
          this.isLoggedIn=true;
          this.isLoggedOut=false;
   }
   if(localStorage.getItem("SessionUser") == null)
   {
          this.isLoggedOut=true;
          this.isLoggedIn=false;
   }

  }


  onSignOutClick() {
    localStorage.removeItem("SessionUser");

    window.location.reload();
  }

}
