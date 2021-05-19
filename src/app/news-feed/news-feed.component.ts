import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { NewsItem } from "../models/news-item";


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  newsResults: NewsItem[];

  constructor(private newsFeedService: NewsFeedService) { }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList() {
    this.newsFeedService.getNewsArticles().subscribe((data: any) => {
      this.newsResults = data.data;
      console.log(this.newsResults);
    })
  }

}
