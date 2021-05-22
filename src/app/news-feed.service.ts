import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from './models/news-item'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  //private url = "https://stocknewsapi.com/api/v1?tickers=FB,AMZN,NFLX,AAPL&items=15&token=8xlggetn1dvysox94z701qyxjvbzjcjd4dip03oo"
  private url = "https://stocknewsapi.com/api/v1?tickers=";
  private token = "&items=15&token=8xlggetn1dvysox94z701qyxjvbzjcjd4dip03oo";
  constructor(private http: HttpClient) { }

  getNewsArticles(tickers: string): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.url + tickers + this.token).pipe(
      map((data: NewsItem[]) => {
        return data;
      })
    )
  }
}
