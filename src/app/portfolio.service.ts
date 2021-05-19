import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PortfolioItem } from './models/portfolio-item'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url = "https://api.twelvedata.com/quote?symbol=tsla,gdrx,aapl,msft&apikey=1fa925de503a4dccbcda863970e0c081"


  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<PortfolioItem[]> {
    return this.http.get<PortfolioItem[]>(this.url);
  }
}
