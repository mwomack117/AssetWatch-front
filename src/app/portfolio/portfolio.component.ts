import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[] = [];


  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getPortfolio().subscribe(result => {
      for (let key of Object.keys(result)) {
        this.portfolioItems.push(result[key]);
      }
      console.log(this.portfolioItems);
    });
  }

}

