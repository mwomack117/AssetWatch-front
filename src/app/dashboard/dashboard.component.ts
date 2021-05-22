import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData = JSON.parse(localStorage.getItem("SessionUser"));

  constructor() { }

  ngOnInit() {
  }

}
