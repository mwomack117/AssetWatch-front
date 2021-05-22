import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsItem } from "../models/news-item";
import { ApiInvestmentService } from '../api-investment.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  newsResults: NewsItem[];
  dbTickers: string[] = [];

  constructor(private newsFeedService: NewsFeedService, private apiInvestmentService: ApiInvestmentService) { }

  ngOnInit() {
    this.apiInvestmentService.getAllAssets().subscribe(dbResults => {
      dbResults.forEach(item => this.dbTickers.push(item["tickerSymbol"]))
      console.log("news tickers", this.dbTickers.join());

      if (dbResults.length == 0) {
        this.newsFeedService.getNewsArticles("AMZN,FB,TSLA,MSFT").subscribe((data: any) => {
          this.newsResults = data.data;
          console.log(this.newsResults);
        })
      }

      this.newsFeedService.getNewsArticles(this.dbTickers.join()).subscribe((data: any) => {
        this.newsResults = data.data;
        console.log(this.newsResults);
      })

    })


  }




}
