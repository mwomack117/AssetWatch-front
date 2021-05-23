import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = localStorage.getItem("SessionUser") !== null ? true : false;
  isLoggedOut: boolean = localStorage.getItem("SessionUser") == null ? true : false;

  ngOnInit(): void {
    console.log(localStorage.getItem("SessionUser"));

  }

  onSignOutClick() {
    localStorage.removeItem("SessionUser");
    window.location.reload();
  }

}
