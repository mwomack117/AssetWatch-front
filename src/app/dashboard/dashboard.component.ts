import { Component, OnInit } from '@angular/core';
import { ApiInvestmentService } from '../api-investment.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData = JSON.parse(localStorage.getItem("SessionUser"));

  constructor(private apiInvestmentService: ApiInvestmentService) { }

  ngOnInit() {

    // console.log("dashboard", this.userData["id"]);
    // this.apiInvestmentService.getAllAssets().subscribe(result => {
    //   console.log("investments", result);
    // })
  }

}
